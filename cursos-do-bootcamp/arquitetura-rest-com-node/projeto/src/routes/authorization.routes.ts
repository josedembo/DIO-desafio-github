import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT from "jsonwebtoken";
import { config } from "dotenv";
import { basicAuthenticationMiddleware } from "../middlewares/basic-authentication.middlewar";
import { forbiddenError } from "../models/errors/forbiddenError.model";
config();


const authorizationRoutes = Router();


authorizationRoutes.post("/token", basicAuthenticationMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    try {

        const { user } = request;

        if (!user) {
            throw new forbiddenError("user not found")
        }

        const jwtPayload = { userName: user?.username };
        const jwtOptions = { subject: user?.id, }
        const jwtSicret = `${process.env.SICRET_KEY_JWT}`

        const jwtToken = JWT.sign(jwtPayload, jwtSicret, jwtOptions);

        // console.log(tokenContent);

        return response.status(StatusCodes.OK).json({ token: jwtToken, user });

    } catch (error) {

        next(error)
    }
})


export { authorizationRoutes }