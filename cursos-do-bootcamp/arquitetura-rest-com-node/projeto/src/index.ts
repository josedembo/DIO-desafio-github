import express from "express";
import { usersRoute } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoute);


app.listen(3000, () => {
    console.log("server is ronning at port 3000");
})

