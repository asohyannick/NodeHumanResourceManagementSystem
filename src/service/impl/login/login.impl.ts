import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Auth from "../../../model/auth/auth.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const loginIntoYourAccount = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        let user = await Auth.findOne({ email, isAdmin: true });
        if (!user) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "User doesn't exist!" });
        }
        const comparedPassword = await bcrypt.compare(user.password, password);
        if (!comparedPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid Credentials" });
        }
        const accessToken = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m',
        });
        const refreshToken = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, password: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d',
        });
        user.refreshToken = refreshToken;
        await user.save();
        res.cookie('auth', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV as string === 'production',
            maxAge: 90000,
            sameSite: 'strict',
        });
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User has signed in successfully!",
            user: user._id,
            accessToken,
            refreshToken,
        })
    } catch (error) {
        console.error("Error occured!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error Message",
        });
    }
}

export default loginIntoYourAccount;