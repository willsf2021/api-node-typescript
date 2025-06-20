import { StatusCodes } from "http-status-codes";
import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, DEV!");
});

router.post("/teste", (req, res) => {
  return res.status(StatusCodes.ACCEPTED);
});

export { router };
