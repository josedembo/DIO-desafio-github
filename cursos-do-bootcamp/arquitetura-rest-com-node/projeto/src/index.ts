import express from "express";
import { errorHandler } from "./middlewares/error-handler.middlewar";
import { authorizationRoutes } from "./routes/authorization.routes";
import { usersRoute } from "./routes/users.routes";

const app = express();

// configuração da aplicacão
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração das rotas
app.use("/users", usersRoute);
app.use(authorizationRoutes)

// configuração dos handlers de erros
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log("server is ronning at port 3000");
})

