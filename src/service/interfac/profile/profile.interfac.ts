import { Document } from 'mongoose';
export interface IProfile extends Document {
    profilePic:string;
    firstName: string;
    lastName:string;
    email:string;
    carier:string;
    address:{
        street: string;
        city:string;
        state:string;
        country:string;
        zipCode:string;
    };
    hobbies:string[];
}