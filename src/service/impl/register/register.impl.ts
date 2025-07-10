import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Auth from "../../../model/auth/auth.model";
import jwt from 'jsonwebtoken';
const createAccount = async(req: Request, res: Response): Promise<Response> => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await Auth.findOne({ email });
        if (user) {
            user.refreshToken = '',
            await user.save();
            return res.status(StatusCodes.BAD_REQUEST).json({message: "User doesn't exist!"});
        }
        const newUser = new Auth({
            firstName,
            lastName,
            email,
            password,
            isAdmin: true,
        });
        await newUser.save();
        const accessToken = jwt.sign({id: newUser._id, firstName:newUser.firstName, lastName:newUser.lastName, email:newUser.email, password:newUser.email, isAdmin: newUser.isAdmin}, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m',
        });
         const refreshToken = jwt.sign({id: newUser._id, firstName:newUser.firstName, lastName:newUser.lastName, email:newUser.email, password:newUser.email, isAdmin: newUser.isAdmin}, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d',
        });
        newUser.refreshToken = refreshToken;
        await newUser.save();
        res.cookie('auth', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV as string === 'production',
            maxAge:90000,
            sameSite:'strict',
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User registration is successful!",
            user: newUser._id,
            accessToken,
            refreshToken
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

export default createAccount;