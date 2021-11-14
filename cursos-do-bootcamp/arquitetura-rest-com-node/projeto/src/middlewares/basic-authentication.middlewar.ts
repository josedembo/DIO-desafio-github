import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../models/errors/ForbiddenError.model";
import UsersRepsitory from "../repositors/UsersRepsitory";


export async function basicAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
    try {
        const authorizationHeader = request.headers.authorization;

        if (!authorizationHeader) {
            throw new ForbiddenError("not authorizated");
        }

        // basic a82jirh9h21o==

        const [authenticationType, token] = authorizationHeader.split(" ");

        if (authenticationType !== "Basic" || !token) {
            throw new ForbiddenError("authentication type invalid");
        }

        const tokenContent = Buffer.from(token, "base64").toString("utf-8");

        const [username, password] = tokenContent.split(":");

        if (!username || !password) {

            throw new ForbiddenError("username or password invalid")
        }

        const user = await UsersRepsitory.findByUsernameAndPassword({ username, password });

        if (!user) {
            throw new ForbiddenError("username or password invalid");
        }

        request.user = user;

        next();
    } catch (error) {

        next(error)
    }
}