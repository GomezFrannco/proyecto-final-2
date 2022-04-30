import express from "express";
import productRouter from "../routes/products.routes.js";
import cartRouter from "../routes/carts.routes.js";

export class Server {
  constructor() {
    this.app = {
      express: express(),
      port: null,
    };
    this.middlewares();
    this.appRoutes();
    this.routerRoutes();
  }
  middlewares() {
    this.app.express.use(express.json());
  }
  appRoutes() {
    this.app.express.get("/", (req, res) => {
      res.send("Hi from express");
    });
  }
  routerRoutes() {
    this.app.express.use("/api", productRouter);
    this.app.express.use("/api", cartRouter);
  }
  listen(port) {
    this.app.express.listen((this.app.port = port), () => {
      console.log("listening on port:", (this.app.port = port));
    });
    this.app.express.on("error", (err) => {
      console.log("error: ", err);
    });
  }
}
