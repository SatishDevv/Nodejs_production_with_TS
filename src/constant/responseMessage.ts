export default {
    SUCCESS: 'Operation completed successfully',
    SOME_THING_WENT_WRONG: 'Something went wrong, please try again later',
    NOT_ALLOWED_BY_CORS: 'Not allowed by CORS',
    NOT_FOUND: (entity: string) => `${entity} not found`,
    NOT_ALLOWED: (entity: string) => `You are not allowed to access this ${entity}`,
    USER_NOT_FOUND: (email: string): string => `User not found with email ${email}`,
    INVALID_PASSWORD: (email: string): string => `Invalid password for account ${email}`,
    USER_CREATED: (email: string): string => `${email} users created successfully`,
    SEED_USER_ALREADY_EXISTS: 'All seed users exist'
};
