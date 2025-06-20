import { StatusCodes } from "http-status-codes";
import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Olá, DEV!");
});

router.post("/teste", (req, res) => {
  console.log(req.params);

  return res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
