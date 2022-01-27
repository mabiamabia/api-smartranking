import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria>;
    consultarCategorias(): Promise<Array<Categoria>>;
    consultarCategoriaPeloId(categoria: string): Promise<Categoria>;
    atualizarCategoria(atualizarCategoriaDto: AtualizarCategoriaDto, categoria: string): Promise<void>;
    atribuirCategoriajogador(params: string[]): Promise<void>;
}
