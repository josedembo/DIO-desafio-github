import { NextFunction, Request, Response, Router } from "express";
import statusCodes, { StatusCodes } from "http-status-codes";
import { bearerAuthenticationMiddleware } from "../middlewares/bearer-authentication.meddlewar";
import UsersRepsitory from "../repositors/UsersRepsitory";


const usersRoute = Router();


usersRoute.post("/", async (request: Request, response: Response) => {
    const { username, password } = request.body;
    const user = await UsersRepsitory.create({ username, password });

    return response.status(statusCodes.CREATED).json(user);
});

usersRoute.get("/", bearerAuthenticationMiddleware, async (request: Request, response: Response, next: NextFunction) => {
    console.log(request.headers["authorization"]);
    const users = await UsersRepsitory.findAllUsers();
    return response.status(statusCodes.OK).json(users);

});

usersRoute.get("/:id", async (request: Request<{ id: string }>, response: Response, next: NextFunction) => {

    try {
        const { id } = request.params

        const user = await UsersRepsitory.findBYId(id);

        return response.status(StatusCodes.OK).json(user);

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

