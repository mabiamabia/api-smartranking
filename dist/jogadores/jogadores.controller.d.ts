import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void>;
    consultarJogadores(email: string): Promise<Jogador[] | Jogador>;
    deletarJogador(email: string): Promise<void>;
}
