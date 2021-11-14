import { NextFunction, Request, Response } from "express";
import statusCodes from "http-status-codes";
import { BadRequestError } from "../models/errors/BadRequestError.model";
import { DatabaseError } from "../models/errors/DatabaseError.model";
import { ForbiddenError } from "../models/errors/ForbiddenError.model";

function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
    if (error instanceof DatabaseError) {
        return response.status(statusCodes.BAD_REQUEST).json({ error: error.message });
    } else if (error instanceof ForbiddenError) {
        return response.status(statusCodes.FORBIDDEN).json({ error: error.message });
    } else if (error instanceof BadRequestError) {
        return response.status(statusCodes.BAD_REQUEST).json({ error: error.message })
    } else {
        return response.sendStatus(statusCodes.INTERNAL_SERVER_ERROR);
    }
}

export { errorHandler }