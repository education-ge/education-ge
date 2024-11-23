import {
    Controller,
    Get,
    Param,
    ParseEnumPipe,
    ParseIntPipe,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { LocaleEnum } from '../enums';
import { ApiParam } from '@nestjs/swagger';

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService) {}

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @Get()
    getCities(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
    ) {
        return this.citiesService.getCities(locale);
    }

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @Get(':cityId/areas')
    getAreas(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
        @Param('cityId', ParseIntPipe) cityId: number,
    ) {
        return this.citiesService.getAreas(locale, cityId);
    }
}
