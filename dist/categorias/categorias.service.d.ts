import { Model } from 'mongoose';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
export declare class CategoriasService {
    private readonly categoriaModel;
    constructor(categoriaModel: Model<Categoria>);
    criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria>;
}
