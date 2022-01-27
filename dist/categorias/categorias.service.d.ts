import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
export declare class CategoriasService {
    private readonly categoriaModel;
    private readonly jogadoresService;
    constructor(categoriaModel: Model<Categoria>, jogadoresService: JogadoresService);
    criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria>;
    consultarTodasCategorias(): Promise<Array<Categoria>>;
    consultarCategoriaPeloId(categoria: string): Promise<Categoria>;
    atualizarCategoria(categoria: string, atualizarCategoriaDto: AtualizarCategoriaDto): Promise<void>;
    atribuirCategoriaJogador(params: string[]): Promise<void>;
}
