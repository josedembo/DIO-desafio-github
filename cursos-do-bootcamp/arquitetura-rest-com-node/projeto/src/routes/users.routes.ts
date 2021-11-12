import { NextFunction, Request, Response, Router } from "express";
import statusCodes, { StatusCodes } from "http-status-codes";
import { DatabaseError } from "../models/errors/DatabaseError.model";
import UsersRepsitory from "../repositors/UsersRepsitory";

interface IUsers {
    id: string
    name: string
    username: string
    password: string
}

const usersRoute = Router();

const users: IUsers[] = [];


usersRoute.post("/", async (request: Request, response: Response) => {
    const { username, password } = request.body;
    const user = await UsersRepsitory.create({ username, password });

    return response.status(statusCodes.CREATED).json(user);
});

usersRoute.get("/", async (request: Request, response: Response, next: NextFunction) => {
    const users = await UsersRepsitory.findAllUsers();
    return response.status(statusCodes.OK).json(users);

});

usersRoute.get("/:id", async (request: Request<{ id: string }>, response: Response) => {

    try {
        const { id } = request.params

        const user = await UsersRepsitory.findBYId(id);

        return response.status(StatusCodes.OK).json(user);

    } catch (error) {
        if (error instanceof DatabaseError) {
            return response.sendStatus(statusCodes.BAD_REQUEST);
        } else {
            return response.sendStatus(statusCodes.INTERNAL_SERVER_ERROR);
        }
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

