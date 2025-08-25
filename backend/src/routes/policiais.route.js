import express from 'express';
import { listarTodosPoliciais, criarPolicial } from '../controllers/policiais.controller.js';

const PoliciaisRoutes = express.Router();

PoliciaisRoutes.get('/policiais', listarTodosPoliciais);

PoliciaisRoutes.post('/policiais', criarPolicial);

export default PoliciaisRoutes;
