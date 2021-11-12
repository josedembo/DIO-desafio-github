import db from "../db";
import { User } from "../models/user.models";


class UsersRepository {

    async findAllUsers(): Promise<User[]> {
        const querySelect = "SELECT id, username FROM apliation_user"

        const result = await db.query<User>(querySelect);
        const rows = result.rows;
        return rows || [];
    }

    async createUser({ username, password }: User) {
        const querytInsert = `
        ISERT INTO
        aplications_user(username, password)
        Values(${username}, ${password})
        `
        const result = await db.query(querytInsert);

        return result.rows;

    }
}



export default new UsersRepository;