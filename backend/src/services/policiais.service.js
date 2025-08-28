const db = require('../database/modulemysql2'); // ajuste o caminho conforme seu setup

class PoliciaisService {
    async listarTodos() {
        return new Promise((resolve, reject) => {
            db.pool.query('SELECT * FROM policiais order by id desc', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }


    async criarPolicial({ rg_civil, rg_militar, cpf, data_nascimento, matricula }) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula)
                VALUES (?, ?, ?, ?, ?)
            `;

            db.pool.query(
                sql,
                [rg_civil, rg_militar, cpf, data_nascimento, matricula],
                (error, results) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve({ id: results.insertId, rg_civil, rg_militar, cpf, data_nascimento, matricula });
                }
            );
        });
    }


    async obterPolicialPorCPF(cpf) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM policiais WHERE cpf = ? LIMIT 1';
            db.pool.query(sql, [cpf], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results[0] || null);
            });
        });
    }


}

module.exports = new PoliciaisService();