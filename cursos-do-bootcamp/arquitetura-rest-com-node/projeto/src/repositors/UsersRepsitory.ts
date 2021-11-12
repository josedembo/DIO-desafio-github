import db from "../db";
import { User } from "../models/user.models";
import { config } from "dotenv";
config();

class UsersRepository {

    async findAllUsers(): Promise<User[]> {
        const querySelect = "SELECT id, username FROM apliation_user"

        const { rows } = await db.query<User>(querySelect);

        return rows || [];
    }

    async findBYId(id: string): Promise<User> {

        const querySelect = `SELECT id,username FROM apliation_user WHERE id=$1`

        const values = [id];
        const { rows } = await db.query<User>(querySelect, values);


        const [user] = rows;

        return user;

    }

    async createUser({ username, password }: User) {
        const querytInsert = `
        INSERT INTO
        apliation_user(username, password)
        Values('${username}',crypt('${password}', '${process.env.SECRET_KEY_PG_CRYPT}'))
        `
        const { rowCount } = await db.query(querytInsert);

        return rowCount;

    }
}



export default new UsersRepository;