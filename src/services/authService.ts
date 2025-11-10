import responseMessage from '../constant/responseMessage';
import { User } from '../model/userModel';
import { generateToken } from '../utils/jwtHelper';

export default {
    login: async (email: string, password: string): Promise<Object> => {
        try {
            const user = await User.findOne({ email });
            if (!user) throw new Error(responseMessage.USER_NOT_FOUND(email));

            const isMatch = await user.comparePassword(password);
            if (!isMatch) throw new Error(responseMessage.INVALID_PASSWORD(email));

            //  Generate JWT
            const token = generateToken({ id: user._id, email: user.email });

            // Encrypt user data (including Bearer token)
            const userData = {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                token
            };
            return userData;
        } catch (err) {
            throw err;
        }
    }
};
