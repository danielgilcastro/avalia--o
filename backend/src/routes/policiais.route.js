import express from 'express'
import PoliciaisService from '../services/policiais.service.js'
import bcrypt from "bcryptjs";
import { ValidateCPF } from '../shared/validateCPF.js';

const PoliciaisRoutes = express.Router()

PoliciaisRoutes.get('/policiais', async (req, res) => {

  const policiais = await PoliciaisService.listarTodos()
  res.json(policiais)

})

PoliciaisRoutes.post('/policiais', async (req, res) => {

  if (req.body && req.body.matricula) {
    const salt = await bcrypt.genSalt(10)
    req.body.matricula = await bcrypt.hash(req.body.matricula, salt)
  }

  const cpfValidator = ValidateCPF();

  if (!cpfValidator.isValid(req.body.cpf)) {
    return res.status(400).json({ error: 'CPF inválido' });
  }

  try {
    const novoPolicial = await PoliciaisService.criarPolicial(req.body)
    res.status(201).json(novoPolicial)
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Bad Request' })
  }
})

export default PoliciaisRoutes

