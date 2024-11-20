import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version } from 'package.json';
import { LocaleEnum } from './enums';

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
    app.setGlobalPrefix(':locale', { exclude: ['health'] });
    await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
