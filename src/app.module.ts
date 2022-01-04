/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://priscila:peresila1@cluster0.5ogwc.mongodb.net/smartranking?retryWrites=true&w=majority',
    { useNewUrlParser: true}
    ),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
