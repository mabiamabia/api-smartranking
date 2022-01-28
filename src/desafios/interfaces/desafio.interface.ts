/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Document } from 'mongoose'
import { Jogador } from 'src/jogadores/interfaces/jogador.interface'
//estrutura padrao nest controller
import { DesafioStatus } from './desafio-status.enum'

export interface Desafio extends Document {

    dataHoraDesafio: Date
    status: DesafioStatus
    dataHorasSolicitacao: Date
    dataHoraResposta: Date
    solicitante: Jogador
    categoria: string
    jogadores: Array<Jogador>
    partida: Partida
}

export interface Partida extends Document {
    categoria: string
    jogadores: Array<Jogador>
    def: Jogador
    resultado: Array<Resultado>
}

export interface Resultado {
    set: string
}
