import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
export declare class JogadoresService {
    private jogadores;
    private readonly logger;
    criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadoresPeloEmail(email: string): Promise<Jogador>;
    deletarJogador(email: any): Promise<void>;
    private criar;
    private atualizar;
}
