import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interface/UserInterface';
import bcrypt from 'bcryptjs';

const userSchema = new Schema<IUser>(
    {
        name: { type: String, requied: true },
        email: { type: String, requied: true, unique: true },
        password: { type: String, required: true },
        tubeLightAccessToken: { type: String },
        tubeLightRefreshToken: { type: String },
        tubeLightUserName: { type: String },
        tubeLightPassword: { type: String },
        tubeLightValidityTime: { type: String },
        tubeLightName: { type: String },
        tubeLightEmail: { type: String }
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
};

export const User = mongoose.model<IUser>('User', userSchema);
