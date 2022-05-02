import express from "express";
import productRouter from "../routes/products.routes.js";
import cartRouter from "../routes/carts.routes.js";

export class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.middlewares();
    this.appRoutes();
    this.routerRoutes();
  }
  settings() {
    this.app.set("port", process.env.PORT || this.port || 8080);
  }
  middlewares() {
    this.app.use(express.json());
  }
  appRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Hi from express");
    });
  }
  routerRoutes() {
    this.app.use("/api", productRouter);
    this.app.use("/api", cartRouter);
  }
  listen(port) {
    this.app.listen(this.app.get("port"), () => {
      console.log("listening on port: ", this.app.get("port"));
    });
    this.app.on("error", (err) => {
      console.log("error: ", err);
    });
  }
}
