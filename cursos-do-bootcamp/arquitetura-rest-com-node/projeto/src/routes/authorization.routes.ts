import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT, { SignOptions } from "jsonwebtoken";
import { config } from "dotenv";
import { basicAuthenticationMiddleware } from "../middlewares/basic-authentication.middlewar";
import { ForbiddenError } from "../models/errors/ForbiddenError.model";
import { jwtAuthenticationMiddleware } from "../middlewares/jwt-authentication.meddlewar";
config();


const authorizationRoutes = Router();

authorizationRoutes.post("/token/valide", jwtAuthenticationMiddleware, (request: Request, response: Response, next: NextFunction) => {
    return response.sendStatus(StatusCodes.OK);
});

authorizationRoutes.post("/token", basicAuthenticationMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    try {

        const { user } = request;

        if (!user) {
            throw new ForbiddenError("user not found")
        }

        const jwtPayload = { userName: user?.username };
        const jwtOptions: SignOptions = { subject: user?.id, expiresIn: "1m" }
        const jwtSicret = `${process.env.SICRET_KEY_JWT}`


        const jwtToken = JWT.sign(jwtPayload, jwtSicret, jwtOptions);


        return response.status(StatusCodes.OK).json({ token: jwtToken, user });

    } catch (error) {

        next(error)
    }
});



export { authorizationRoutes }