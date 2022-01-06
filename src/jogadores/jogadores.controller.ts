/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresValidacaoParametrosPipe } from './pipes/jogadores-validacao-parametros.pipe';

@Controller('api/V1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService: JogadoresService){}

    @Post()
    @UsePipes(ValidationPipe)
    async criarAtualizarJogador(
        @Body() criaJogadorDto: CriarJogadorDto) {
        await this.jogadoresService.criarAtualizarJogador(criaJogadorDto)
    }

    @Get() 
    async consultarJogadores(): Promise<Jogador[]> {

        return await this.jogadoresService.consultarTodosJogadores();

        }

    /* Replica */
    @Get() 
    async consultarJogadorPeloId(
        @Query('email', JogadoresValidacaoParametrosPipe) email: string): Promise<Jogador[] | Jogador> {
            
            return await this.jogadoresService.consultarJogadorPeloEmail(email);
    }





    @Delete()
    async deletarJogador(
        @Query('email', JogadoresValidacaoParametrosPipe) email:string): Promise<void> {
            this.jogadoresService.deletarJogador(email)
    }
}
