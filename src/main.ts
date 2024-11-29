import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from 'package.json';
import { LocaleEnum } from './enums';
import { RequestMethod } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get<ConfigService>(ConfigService);

    const config = new DocumentBuilder()
        .setTitle('Education GE')
        .setVersion(version)
        .addGlobalParameters({
            name: 'locale',
            in: 'path',
            required: true,
            schema: { example: LocaleEnum.en, enum: Object.values(LocaleEnum) },
        })
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory);

    app.enableCors();
    app.setGlobalPrefix(':locale', {
        exclude: [
            { path: 'health', method: RequestMethod.GET },
            { path: 'institutions/kindergartens', method: RequestMethod.POST },
            { path: 'institutions/schools', method: RequestMethod.POST },
            { path: 'languages', method: RequestMethod.POST },
        ],
    });
    await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
