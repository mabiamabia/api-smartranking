/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import {v4 as uuidv4 } from 'uuid' ;
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class JogadoresService {

    constructor(@InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>){}

    private readonly logger = new Logger(JogadoresService.name)

    async criarJogador(criaJogadorDto: CriarJogadorDto): Promise<Jogador>{

        const { email } = criaJogadorDto

        const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec();
        
        if(jogadorEncontrado) {
            throw new BadRequestException(`Jogador com ${email} já cadastrado`)
        }
        const jogadorCriado = new this.jogadorModel(criaJogadorDto)
        return await jogadorCriado.save()
    }

    /* Replica */
    async atualizarJogador(_id: string, criarJogadorDto: CriarJogadorDto): Promise<void>{

        const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec();

        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com id ${_id} não encontrado`)
        }
        await this.jogadorModel.findOneAndUpdate({_id}, {$set: criarJogadorDto}).exec()
    }

    async consultarTodosJogadores(): Promise<Jogador[]> {
        return await this.jogadorModel.find().exec()
    }

            /*------------------------------- aqui --------------------------*/

    async consultarJogadorPeloEmail(email: string): Promise<Jogador> {
        const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec()
        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com email ${email} não encontrado`)
        } else {
            return jogadorEncontrado
        }
    }
    
    async deletarJogador(email): Promise<any> {
        return await this.jogadorModel.deleteOne({email}).exec()
}

}