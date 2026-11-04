import { prisma } from '../config/database.js';

// REPOSITÓRIO de Produto — a ÚNICA camada que conversa com o Prisma.
// Implemente:
//   - listar todos (IMPORTANTE: traga junto a categoria de cada produto, para a
//     listagem conseguir mostrar o nome dela — pense em como o Prisma inclui
//     dados relacionados);
//   - criar um produto (guardando a referência para a categoria).
// Dica: use `prisma.produto.*`. Tudo é assíncrono.
export class ProdutosRepositoryPrisma {
  // TODO: implemente os métodos descritos acima.
    async create(dados) {
        const novoProduto = await prisma.produto.create({
            data: {
                nome: dados.nome,
                preco: dados.preco,
                categoria: dados.categoria_id,
            }
        });

        return novoProduto;
    }

    async findAll() {
        return await prisma.produto.findMany({
            include: { categoria: true },
        });
    } 
} 
