import { User } from '../model/userModel';
import responseMessage from '../constant/responseMessage';
import logger from '../utils/logger';

/**
 * Type for seeding users
 */
interface SeedUser {
    name: string;
    email: string;
    password: string;
}

/**
 * Seed initial users (non-blocking, production-safe)
 * - Skips users that already exist
 * - Hashes passwords in parallel
 * - Never blocks main thread (Promise.allSettled)
 */
export const seedInitialUsers = async (): Promise<{
    success: boolean;
    message: string;
    created?: number;
    failed?: number;
}> => {
    try {
        const seedUsers: SeedUser[] = [
            {
                name: 'Admin User',
                email: 'admin@example.com',
                password: 'Admin@123'
            }
        ];

        //  Fetch existing users in one query
        const existingEmails = seedUsers.map((u) => u.email);
        const existingUsers = await User.find({ email: { $in: existingEmails } });
        const existingEmailSet = new Set(existingUsers.map((u) => u.email));

        // Filter out already existing users
        const newUsers = seedUsers.filter((u) => !existingEmailSet.has(u.email));

        if (newUsers.length === 0) {
            //   console.log(`⚠️ ${responseMessage.SEED_USER_ALREADY_EXISTS} `);
            return {
                success: false,
                message: responseMessage.SEED_USER_ALREADY_EXISTS
            };
        }

        // Hash passwords concurrently (non-blocking)
        const usersToInsert: Partial<any>[] = await Promise.all(
            newUsers.map(async (user) => ({
                name: user.name,
                email: user.email,
                password: user.password
            }))
        );

        // Insert users concurrently and safely
        const results = await Promise.allSettled(usersToInsert.map((u) => User.create(u)));

        const created = results.filter((r) => r.status === 'fulfilled').length;
        const failed = results.filter((r) => r.status === 'rejected').length;

        return {
            success: true,
            message: responseMessage.SEED_USER_ALREADY_EXISTS,
            created,
            failed
        };
    } catch (err: any) {
        logger.error('❌ Error while seeding users:', err.message);
        throw new Error('Error while seeding initial users');
    }
};
