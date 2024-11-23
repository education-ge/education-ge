import { Controller, Get, Param, ParseEnumPipe } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LocaleEnum } from '../enums';
import { ApiParam } from '@nestjs/swagger';

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
}
