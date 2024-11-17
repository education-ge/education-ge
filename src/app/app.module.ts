import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { InstitutionsModule } from '../institutions/institutions.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: ['.env.local', '.env'] }),
        TypeOrmModule.forRootAsync(databaseConfig()),
        InstitutionsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
