"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var JogadoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JogadoresService = JogadoresService_1 = class JogadoresService {
    constructor(jogadorModel) {
        this.jogadorModel = jogadorModel;
        this.jogadores = [];
        this.logger = new common_1.Logger(JogadoresService_1.name);
    }
    async criarAtualizarJogador(criaJogadorDto) {
        const { email } = criaJogadorDto;
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
        if (jogadorEncontrado) {
            await this.atualizar(jogadorEncontrado, criaJogadorDto);
        }
        else {
            await this.criar(criaJogadorDto);
        }
    }
    async consultarTodosJogadores() {
        return await this.jogadores;
    }
    async consultarJogadoresPeloEmail(email) {
        const jogadorEncontrado = this.jogadores.find(jogador => jogador.email === email);
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com email ${email} não encontrado`);
        }
        else {
            return jogadorEncontrado;
        }
    }
    async deletarJogador(email) {
        const jogadorEncontrado = this.jogadores.find(jogador => jogador.email === email);
        this.jogadores = this.jogadores.filter(jogador => jogador.email !== jogadorEncontrado.email);
    }
    criar(criaJogadorDto) {
        const jogadorCriado = new this.jogadorModel(criaJogadorDto);
    }
    atualizar(jogadorEncontrado, criarJogadorDto) {
        const { nome } = criarJogadorDto;
        jogadorEncontrado.nome = nome;
    }
};
JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Jogador')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JogadoresService);
exports.JogadoresService = JogadoresService;
//# sourceMappingURL=jogadores.service.js.map