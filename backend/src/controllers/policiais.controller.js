import PoliciaisService from '../services/policiais.service.js';
import bcrypt from "bcryptjs";
import { ValidateCPF } from '../shared/validateCPF.js';

// Lista todos os policiais
export const listarTodosPoliciais = async (req, res) => {
    try {
        const policiais = await PoliciaisService.listarTodos();
        res.json(policiais);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar policiais' });
    }
};

// Cria um novo policial
export const criarPolicial = async (req, res) => {
    if (req.body && req.body.matricula) {
        const salt = await bcrypt.genSalt(10);
        req.body.matricula = await bcrypt.hash(req.body.matricula, salt);
    }

    // const cpfValidator = ValidateCPF();
    // if (!cpfValidator.isValid(req.body.cpf)) {
    //     return res.status(400).json({ error: 'CPF inválido' });
    // }

    try {
        const novoPolicial = await PoliciaisService.criarPolicial(req.body);
        res.status(201).json(novoPolicial);
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: 'Registro duplicado: já existe um policial com esses dados.' });
        }
        if (error.sqlMessage && error.sqlMessage.includes('cannot be null')) {
            return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
        }
        if (error.sqlMessage) {
            return res.status(400).json({ error: error.sqlMessage });
        }
        res.status(500).json({ error: 'Erro ao criar policial' });
    }
};