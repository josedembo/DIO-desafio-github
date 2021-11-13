import { NextFunction, Request, Response } from "express";
import { forbiddenError } from "../models/errors/forbiddenError.model";
import UsersRepsitory from "../repositors/UsersRepsitory";


export async function basicAuthenticationMiddleware(request: Request, response: Response, next: NextFunction) {
    try {
        const authoriztionHeaders = request.headers.authorization;

        if (!authoriztionHeaders) {
            throw new forbiddenError("not authorizated");
        }

        // basic a82jirh9h21o==
        console.log(authoriztionHeaders)

        const [authenticationType, token] = authoriztionHeaders.split(" ");

        if (authenticationType !== "Basic" || !token) {
            throw new forbiddenError("authentication type invalid");
        }

        const tokenContent = Buffer.from(token, "base64").toString("utf-8");

        const [username, password] = tokenContent.split(":");

        if (!username || !password) {

            throw new forbiddenError("username or password invalid")
        }

        const user = await UsersRepsitory.findByUsernameAndPassword({ username, password });

        if (!user) {
            throw new forbiddenError("username or password invalid");
        }

        request.user = user;

        next();
    } catch (error) {

        next(error)
    }
}