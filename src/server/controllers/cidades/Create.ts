import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

// Interface que define a estrutura do objeto Cidade
interface ICidade { 
  nome: string
}

export const createValidation = validation((getSchema) => ({

  body: getSchema<ICidade>(yup.object().shape({
    nome: yup.string().required().min(3)  }))
}));

// Método create (CidadesController.create)
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
 