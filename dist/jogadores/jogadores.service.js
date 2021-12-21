"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JogadoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let JogadoresService = JogadoresService_1 = class JogadoresService {
    constructor() {
        this.jogadores = [];
        this.logger = new common_1.Logger(JogadoresService_1.name);
    }
    async criarAtualizarJogador(criaJogadorDto) {
        const { email } = criaJogadorDto;
        const jogadorEncontrado = await this.jogadores.find(jogador => jogador.email === email);
        if (jogadorEncontrado) {
            this.atualizar(jogadorEncontrado, criaJogadorDto);
        }
        else {
            this.criar(criaJogadorDto);
        }
    }
    async consultarTodosJogadores() {
        return await this.jogadores;
    }
    async consultarJogadoresPeloEmail(email) {
        const jogadorEncontrado = await this.jogadores.find(jogador => jogador.email === email);
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com email ${email} não encontrado`);
        }
        else {
            return jogadorEncontrado;
        }
    }
    async deletarJogador(email) {
        const jogadorEncontrado = await this.jogadores.find(jogador => jogador.email === email);
        this.jogadores = this.jogadores.filter(jogador => jogador.email !== jogadorEncontrado.email);
    }
    criar(criaJogadorDto) {
        const { nome, telefoneCelular, email } = criaJogadorDto;
        const jogador = {
            _id: (0, uuid_1.v4)(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg'
        };
        this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`);
        this.jogadores.push(jogador);
    }
    atualizar(jogadorEncontrado, criarJogadorDto) {
        const { nome } = criarJogadorDto;
        jogadorEncontrado.nome = nome;
    }
};
JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)()
], JogadoresService);
exports.JogadoresService = JogadoresService;
//# sourceMappingURL=jogadores.service.js.map