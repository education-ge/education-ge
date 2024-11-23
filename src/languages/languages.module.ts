import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageEntity } from './entities';

@Module({
    controllers: [LanguagesController],
    providers: [LanguagesService],
    imports: [TypeOrmModule.forFeature([LanguageEntity])],
})
export class LanguagesModule {}
