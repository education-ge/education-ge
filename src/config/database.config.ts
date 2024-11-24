import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
    ContactsEntity,
    TranslationEntity,
    KindergartenEntity,
    SchoolEntity,
} from '../institutions/entities';
import { PlaceTranslationEntity } from '../cities/entities';
import { AreaEntity, CityEntity, SubareaEntity } from '../cities/entities';
import {
    LanguageEntity,
    LanguageTranslationEntity,
} from '../languages/entities';

export function databaseConfig(): TypeOrmModuleAsyncOptions {
    return {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.getOrThrow('DB_HOST'),
            port: 5432,
            username: configService.getOrThrow('DB_USER'),
            password: configService.getOrThrow('DB_PASS'),
            database: configService.getOrThrow('DB_NAME'),
            entities: [
                KindergartenEntity,
                SchoolEntity,
                ContactsEntity,
                TranslationEntity,
                CityEntity,
                AreaEntity,
                SubareaEntity,
                LanguageEntity,
                PlaceTranslationEntity,
                LanguageTranslationEntity,
            ],
            synchronize: false,
            ssl: configService.getOrThrow('NODE_ENV') === 'production',
        }),
    };
}
