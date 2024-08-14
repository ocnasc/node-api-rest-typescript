import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),

});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {abortEarly: false});
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string,string> = {};

    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      validationErrors[error.path] = error.message;
    })
    console.log({statusCode: StatusCodes.BAD_REQUEST,user_request: req.body, errors: validationErrors})
    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErrors,
    })
  }

  console.log(validatedData);
  return res.status(StatusCodes.OK).send("tudo certo!");
};
