import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { DatabaseError } from "../models/errors/DatabaseError.model";
import { forbiddenError } from "../models/errors/forbiddenError.model";
import UsersRepsitory from "../repositors/UsersRepsitory";


const authorizationRoutes = Router();


authorizationRoutes.post("/token", async (request: Request, response: Response, next: NextFunction) => {

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

        console.log(tokenContent);

        return response.status(StatusCodes.OK).json({ token, user });

    } catch (error) {

        next(error)
    }
})


export { authorizationRoutes }