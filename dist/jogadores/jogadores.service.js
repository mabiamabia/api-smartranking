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
const uuid = require("uuid/v1");
let JogadoresService = JogadoresService_1 = class JogadoresService {
    constructor() {
        this.jogadores = [];
        this.logger = new common_1.Logger(JogadoresService_1.name);
    }
    async criarAtualizarJogador(criaJogadorDto) {
        this.logger.log(`criaJogadorDto: ${criaJogadorDto}`);
        await this.criar(criaJogadorDto);
    }
    criar(criaJogadorDto) {
        const { nome, telefoneCelular, email } = criaJogadorDto;
        const jogador = {
            _id: uuid(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'www.google.com.br/foto123.jpg'
        };
        this.jogadores.push(jogador);
    }
};
JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)()
], JogadoresService);
exports.JogadoresService = JogadoresService;
//# sourceMappingURL=jogadores.service.js.map