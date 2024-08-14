import { Router } from 'express';



const router = Router();

router.get('/', (req, res) => {
  return res.send('API Funcionando!');
});
router.post('/teste', (req, res) => {
  console.log(req.body);
  return res.status(418).send('hey');
});




export { router };