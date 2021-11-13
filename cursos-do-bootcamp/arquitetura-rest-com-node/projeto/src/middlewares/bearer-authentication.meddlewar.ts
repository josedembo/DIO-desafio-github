import { NextFunction, Request, Response } from "express";
import { forbiddenError } from "../models/errors/forbiddenError.model";
import JWT from "jsonwebtoken";
import { config } from "dotenv";
import UsersRepsitory from "../repositors/UsersRepsitory";
config();


export async function bearerAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {

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

        const tokenPayload = JWT.verify(token, `${process.env.SICRET_KEY_JWT}`)

        if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
            throw new forbiddenError("invalid token")
        }
        const id = tokenPayload.sub;

        const user = await UsersRepsitory.findBYId(id);

        // dados do usuario autenticado
        request.user = user;

        next();

    } catch (error) {

        next(error)

    }

}