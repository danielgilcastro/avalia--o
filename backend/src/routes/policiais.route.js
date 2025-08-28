import express from 'express';
import { listarTodosPoliciais, criarPolicial ,obterPolicialPorCPF} from '../controllers/policiais.controller.js';

const PoliciaisRoutes = express.Router();

PoliciaisRoutes.get('/policiais', listarTodosPoliciais);

PoliciaisRoutes.get('/policiais/:cpf', obterPolicialPorCPF);

PoliciaisRoutes.post('/policiais', criarPolicial);

export default PoliciaisRoutes;
