import { AppError } from '../utils/appError.js';

// SERVIÇO de Categoria — REGRAS DE NEGÓCIO.
// Lance `new AppError(mensagem, status)` quando uma regra for violada.
//
// Regras:
//   - o nome da categoria é OBRIGATÓRIO (ex.: 400 se faltar).
// Métodos: criar e listar.
export class CategoriasService {
  constructor(categoriasRepository) {
    this.repo = categoriasRepository;
  }
  // TODO: criar(dados), listar().

    async criar(dados) {
        if(!dados.nome) {
            throw new AppError("O nome é OBRIGATÓRIO.", 422);
        }

        return await this.repo.create(dados);
    }

    async listar() {
        return await this.repo.findAll();
    }
}
