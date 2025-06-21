import { StatusCodes } from "http-status-codes";
import { Router } from "express";
import { CidadesController } from "../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.send("Ola, DEV!");
});

router.post(
  "/cidades",
  // Middle de Validação, se validado, next, daí chama o método do controller!
  CidadesController.createValidation,
  // Método do controller sendo chamado após validação!
  CidadesController.create
);

export { router };
