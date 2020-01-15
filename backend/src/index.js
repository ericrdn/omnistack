import express from "express";
import mongoose from "mongoose";
import rotas from "./routes";

const app = express();

mongoose.connect("mongodb://127.0.0.1/banco", { useNewUrlParser: true });

app.use(express.json());

app.use(rotas);

app.listen(3333);
