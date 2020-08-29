import bodyParser from "body-parser";
import db from "../mock/db.json";
const SERVER_PORT = 3001;
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router(db);
const jsonServerMiddlewares = jsonServer.defaults();
// setup json-server middleware
server.use(jsonServerMiddlewares);
server.use(jsonServer.bodyParser);
// custom middleware
// server.use(singular); // if the response is single element array, returns the object instead
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing url encoded
// const CURRENT_USER_ID = mockConfig.userId;
// PUT, POST, etc custom requests
// server.get("/spendings", (req, res, next) => {
//     res.send("hello");
// })
server.use(router);
server.listen(SERVER_PORT, () => {
    console.log("JSON Server is running on " + SERVER_PORT);
});
//# sourceMappingURL=index.js.map