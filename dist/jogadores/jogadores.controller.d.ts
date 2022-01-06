import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarJogador(criaJogadorDto: CriarJogadorDto): Promise<void>;
    atualizarJogador(criaJogadorDto: CriarJogadorDto, _id: string): Promise<void>;
    consultarJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloId(_id: string): Promise<Jogador>;
    deletarJogador(_id: string): Promise<void>;
}
