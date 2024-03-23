export interface User {
    _id?: string;
    email: string;
    password?: string;
    accessToken?: string;
    rePassword?:string
}