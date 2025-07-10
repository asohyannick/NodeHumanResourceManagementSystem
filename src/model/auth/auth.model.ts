import { model, Schema } from "mongoose";
import bcrypt from 'bcryptjs';
import { IAuth } from '../../service/interfac/auth/auth.interfac';
const authSchema: Schema = new Schema<IAuth>({
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
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true });
authSchema.pre<IAuth>('save', async function (next) {
    if (!this.isModified('password')) return next;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
const Auth = model<IAuth>('Auth', authSchema);
export default Auth;