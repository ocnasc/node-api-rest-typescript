import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers'

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('API Funcionando!');
});


router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);

router.post('/cidades', CidadesController.createValidation, CidadesController.create);



export { router };