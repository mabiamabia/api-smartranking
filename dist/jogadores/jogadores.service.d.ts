import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
export declare class JogadoresService {
    private readonly jogadorModel;
    private jogadores;
    constructor(jogadorModel: Model<Jogador>);
    private readonly logger;
    criarAtualizarJogador(criaJogadorDto: CriarJogadorDto): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadoresPeloEmail(email: string): Promise<Jogador>;
    deletarJogador(email: any): Promise<void>;
    private criar;
    private atualizar;
}
