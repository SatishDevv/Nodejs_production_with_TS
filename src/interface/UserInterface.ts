export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    tubeLightAccessToken?: string;
    tubeLightRefreshToken?: string;
    tubeLightUserName?: string;
    tubeLightPassword?: string;
    tubeLightValidityTime?: string;
    tubeLightName?:string;
    tubeLightEmail?: string;
     // eslint-disable-next-line no-unused-vars
     comparePassword(password: string): Promise<boolean>;
}
