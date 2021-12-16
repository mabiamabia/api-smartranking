/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';

@Controller('api/V1/jogadores')
export class JogadoresController {

    @Post()
    async criarAtualizarJogador(){
        return JSON.stringify({
            "nome": "Diego"
        })
    }

}
