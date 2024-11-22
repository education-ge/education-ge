import {
    Body,
    Controller,
    Get,
    Param,
    ParseEnumPipe,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateKindergartenDto, CreateSchoolDto } from './dto/request';
import { LocaleEnum } from '../enums';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { KindergartenDto, SchoolDto } from './dto/response';

@Controller('institutions')
export class InstitutionsController {
    constructor(private readonly institutionsService: InstitutionsService) {}

    @UsePipes(ValidationPipe)
    @Post('kindergartens')
    createKindergarten(
        @Body()
        createKindergartenDto: CreateKindergartenDto,
    ) {
        return this.institutionsService.createKindergarten(
            createKindergartenDto,
        );
    }

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @ApiOkResponse({ type: KindergartenDto, isArray: true })
    @Get('kindergartens')
    getKindergartens(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
    ) {
        return this.institutionsService.getKindergartens(locale);
    }

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @ApiOkResponse({ type: KindergartenDto })
    @Get('kindergartens/:id')
    getKindergarten(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
        @Param('id', ParseIntPipe) kindergartenId: number,
    ) {
        return this.institutionsService.getKindergartenById(
            kindergartenId,
            locale,
        );
    }

    // @Patch('kindergartens/:id')
    // updateKindergarten(@Param('id', ParseIntPipe) kindergartenId: number) {}
    //
    // @Delete('kindergartens/:id')
    // deleteKindergarten(@Param('id') kindergartenId: number) {}

    @UsePipes(ValidationPipe)
    @Post('schools')
    createSchool(@Body() createSchoolDto: CreateSchoolDto) {
        return this.institutionsService.createSchool(createSchoolDto);
    }

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @ApiOkResponse({ type: SchoolDto, isArray: true })
    @Get('schools')
    getSchools(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
    ) {
        return this.institutionsService.getSchools(locale);
    }

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @ApiOkResponse({ type: SchoolDto })
    @Get('schools/:id')
    getSchool(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
        @Param('id', ParseIntPipe) schoolId: number,
    ) {
        return this.institutionsService.getSchool(schoolId, locale);
    }

    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @Get('cities')
    getCities(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
    ) {
        return this.institutionsService.getCities(locale);
    }

    @Get('languages')
    getLanguages() {
        return this.institutionsService.getLanguages();
    }
}
