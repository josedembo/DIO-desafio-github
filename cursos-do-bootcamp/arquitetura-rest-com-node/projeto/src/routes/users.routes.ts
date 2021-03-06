import { NextFunction, Request, Response, Router } from "express";
import statusCodes from "http-status-codes";
import { jwtAuthenticationMiddleware } from "../middlewares/jwt-authentication.meddlewar";
import { BadRequestError } from "../models/errors/BadRequestError.model";
import UsersRepsitory from "../repositors/UsersRepsitory";


const usersRoute = Router();


usersRoute.post("/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { username, password } = request.body;

        const verifyIfUserAlredayExists = await UsersRepsitory.findByUsername(username);

        if (verifyIfUserAlredayExists !== null) {
            throw new BadRequestError("user already exists");
        }

        const user = await UsersRepsitory.create({ username, password });

        return response.status(statusCodes.CREATED).json(user);

    } catch (error) {

        next(error);

    }
});

usersRoute.get("/", jwtAuthenticationMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    // console.log(request.headers["authorization"]);
    const users = await UsersRepsitory.findAllUsers();
    return response.status(statusCodes.OK).json(users);

});

usersRoute.get("/:id", async (request: Request<{ id: string }>, response: Response, next: NextFunction) => {

    try {
        const { id } = request.params

        const user = await UsersRepsitory.findBYId(id);

        return response.status(statusCodes.OK).json(user);

    } catch (error) {
        next(error);
    }

});

usersRoute.put("/:id", async (request: Request, response: Response) => {
    const { id } = request.params;
    const user = request.body;

    user.id = id;

    await UsersRepsitory.update(user);

    return response.status(statusCodes.CREATED).send();
});


usersRoute.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    const userId = await UsersRepsitory.remove(id);
    console.log(userId);

    return response.status(statusCodes.NO_CONTENT).json({ id: userId });
});


export { usersRoute };

