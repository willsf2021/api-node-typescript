import { StatusCodes } from "http-status-codes";
import { Router } from "express";
import { CidadesController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Ola, DEV!");
});

router.post("/cidades", CidadesController.create);

export { router };
