import express, { json } from "express";

import onwerRouter from "./owners.js";
import ratingRouter from "./ratings.js";
import restaurantRouter from "./restaurants.js";

const server = express();
server.use(json());

server.use("/api/owners", onwerRouter);
server.use("/api/ratings", ratingRouter);
server.use("/api/restaurants", restaurantRouter);


export default server;
