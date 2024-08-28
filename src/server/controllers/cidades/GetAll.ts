

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

// Interface que define a estrutura do objeto Cidade
interface IQueryProps { 
  page?: number; 
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({

  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
    }))
}));

// Método create (CidadesController.create)
export const getAll = async (req: Request<{}, {}, IQueryProps>, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
};
 