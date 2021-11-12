const http = require("http");
const host = "http://localhost"
const port = 3000
const status = require("./pcRamUsage");

http.createServer((request, response) => {
    const url = request.url;
    if (url === "/status") {
        response.end(JSON.stringify(status, null, 2));
    } else {
        response.end("<h1>Seja bem vindo</h1>");
    }
}).listen(3000, () => { console.log(`server is ronning ${host}:${port}`) });

