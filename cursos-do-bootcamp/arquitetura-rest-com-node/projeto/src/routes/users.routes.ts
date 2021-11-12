import { NextFunction, Request, Response, Router } from "express";
import statusCodes, { StatusCodes } from "http-status-codes";
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
    const user = await UsersRepsitory.createUser({ username, password });

    return response.status(statusCodes.CREATED).json(user);
});

usersRoute.get("/", async (request: Request, response: Response, next: NextFunction) => {
    const users = await UsersRepsitory.findAllUsers();
    return response.status(statusCodes.OK).json(users);

});

usersRoute.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params

    const user = await UsersRepsitory.findBYId(id);

    return response.status(StatusCodes.OK).json(user);
});


usersRoute.put("/", (request: Request, response: Response) => {
    const { id } = request.headers;
    const updateUser = request.body;

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0) {
        return response.status(statusCodes.NOT_FOUND).json({ error: "user not faund" })
    }

    const userUpdated = { ...users[userIndex], ...updateUser };

    users[userIndex] = userUpdated;

    return response.status(statusCodes.CREATED).json(userUpdated);
});



usersRoute.delete("/", (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.headers;

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0) {
        return response.status(statusCodes.NOT_FOUND).json({ error: "user not faund" })
    }

    users.splice(userIndex, 1);

    return response.status(statusCodes.NO_CONTENT).send();
});


export { usersRoute };

