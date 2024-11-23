import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { InstitutionsModule } from '../institutions/institutions.module';
import { CitiesModule } from '../cities/cities.module';
import { LanguagesModule } from '../languages/languages.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ['.env.local', '.env'] }),
        TypeOrmModule.forRootAsync(databaseConfig()),
        InstitutionsModule,
        CitiesModule,
        LanguagesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
