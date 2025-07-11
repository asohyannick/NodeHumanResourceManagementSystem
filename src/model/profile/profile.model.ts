import { model, Schema } from "mongoose";
import { IProfile } from "../../service/interfac/profile/profile.interfac";
const profileSchema: Schema = new Schema<IProfile>({
    profilePic: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s',
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    carier: {
        type: String,
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        zipCode: {
            type: String,
        },
    },
    hobbies: {
        type: [String],
        default: ['Code', 'Eat', 'Sleep'],
    },
}, { timestamps: true });
const Profile = model<IProfile>('Profile', profileSchema);
export default Profile;