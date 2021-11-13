import { NextFunction, Request, Response } from "express";
import { forbiddenError } from "../models/errors/forbiddenError.model";
import JWT from "jsonwebtoken";
import { config } from "dotenv";
config();


export async function jwtAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {

    try {
        const authorizationHeader = request.headers.authorization;

        if (!authorizationHeader) {
            throw new forbiddenError("not authorizated");
        }

        // Bearer a82jirh9h21oiufqwriojfni

        const [authenticationType, token] = authorizationHeader.split(" ");

        if (authenticationType !== "Bearer" || !token) {
            throw new forbiddenError("type authentication invalid or not authorizated");
        }

        if (!token) {
            throw new forbiddenError("invalid token");
        }

        try {

            const tokenPayload = JWT.verify(token, `${process.env.SICRET_KEY_JWT}`)

            if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
                throw new forbiddenError("invalid tokennnn")
            }

            const user = {
                id: tokenPayload.sub,
                username: tokenPayload.userName
            }

            // dados do usuario autenticado
            request.user = user;

            next();

        } catch (error) {
            throw new forbiddenError("invalid token")
        }


    } catch (error) {

        next(error)

    }

}