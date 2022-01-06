/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';

@Controller('api/V1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService){}

    @Post()
    @UsePipes(ValidationPipe)
    async criarJogador(
        @Body() criaJogadorDto: CriarJogadorDto) {
        await this.jogadoresService.criarJogador(criaJogadorDto)
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async atualizarJogador(
        @Body() criaJogadorDto: CriarJogadorDto,
        @Param('_id', JogadoresValidacaoParametrosPipe) _id: string): Promise<void> {
        await this.jogadoresService.atualizarJogador(_id, criaJogadorDto)
    }

    @Get() 
    async consultarJogadores(): Promise<Jogador[]> {

        return await this.jogadoresService.consultarTodosJogadores();
    }

    @Get('/:_id') 
    async consultarJogadorPeloId(
        @Param('_id', JogadoresValidacaoParametrosPipe) _id: string): Promise<Jogador> {
            return await this.jogadoresService.consultarJogadorPeloId(_id);
    }

    @Delete('/:_id')
    async deletarJogador(
        @Param('_id', JogadoresValidacaoParametrosPipe) _id: string): Promise<void> {
            this.jogadoresService.deletarJogador(_id)
    }
}
