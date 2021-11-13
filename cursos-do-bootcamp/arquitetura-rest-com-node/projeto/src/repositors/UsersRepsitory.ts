import db from "../db";
import { User } from "../models/user.model";
import { config } from "dotenv";
import { DatabaseError } from "../models/errors/DatabaseError.model";
config();

class UsersRepository {

    async findAllUsers(): Promise<User[]> {
        const querySelect = "SELECT id, username FROM apliation_user"

        const { rows } = await db.query<User>(querySelect);

        return rows || [];
    }

    async findBYId(id: string): Promise<User> {

        try {

            const querySelect = `SELECT id,username FROM apliation_user WHERE id=$1`

            const values = [id];
            const { rows } = await db.query<User>(querySelect, values);


            const [user] = rows;

            return user;
        } catch (error) {

            throw new DatabaseError("user not found", error);
        }


    }

    async findByUsernameAndPassword({ username, password }: User): Promise<User | null> {

        try {

            const querySelect =
                `SELECT id,username 
                FROM apliation_user 
                WHERE username=$1 
                AND password = crypt($2,'${process.env.SECRET_KEY_PG_CRYPT}') `

            const values = [username, password];
            const { rows } = await db.query<User>(querySelect, values);


            const [user] = rows;

            return user || null;
        } catch (error) {

            throw new DatabaseError("user not found");
        }
    }

    async create({ username, password }: User): Promise<string> {
        const script = `
        INSERT INTO
        apliation_user(username, password)
        Values($1,crypt($2, '${process.env.SECRET_KEY_PG_CRYPT}'))
        RETURNING id
        `
        const values = [username, password]

        const { rows } = await db.query<{ id: string }>(script, values);

        const [user] = rows;
        return user.id;

    }

    async remove(id: string): Promise<string> {

        const script = `
        DELETE FROM apliation_user
        WHERE id =$1
        RETURNING id
        `
        const values = [id]
        const { rows } = await db.query<{ id: string }>(script, values)

        const [user] = rows;

        // console.log(user.id);
        return user.id;

    }


    async update(user: User): Promise<void> {

        const script = `
        UPDATE apliation_user
        SET 
            username=$1,
            password=crypt($2, '${process.env.SECRET_KEY_PG_CRYPT}') 

        WHERE id=$3
        `
        const values = [user.username, user.password, user.id]
        await db.query(script, values)

    }

}



export default new UsersRepository;