import {
    Body,
    Controller,
    Get,
    Param,
    ParseEnumPipe,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LocaleEnum } from '../enums';
import { ApiParam } from '@nestjs/swagger';
import { CreateLanguageDto } from './dto/request';

@Controller('languages')
export class LanguagesController {
    constructor(private readonly languagesService: LanguagesService) {}

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @Get()
    getLanguages(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
    ) {
        return this.languagesService.getLanguages(locale);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createLanguage(@Body() createLanguageDto: CreateLanguageDto) {
        return this.languagesService.createLanguage(createLanguageDto);
    }
}
