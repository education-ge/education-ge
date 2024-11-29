import {
    Body,
    Controller,
    Get,
    Param,
    ParseArrayPipe,
    ParseEnumPipe,
    ParseIntPipe,
    Post,
    Query,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateKindergartenDto, CreateSchoolDto } from './dto/request';
import { LocaleEnum } from '../enums';
import { ApiOkResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import {
    KindergartenDto,
    KindergartenListItemDto,
    SchoolDto,
} from './dto/response';

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

    @ApiQuery({ name: 'area', type: 'string', required: false })
    @ApiQuery({ name: 'lang', type: 'string', required: false })
    @ApiQuery({ name: 'pagination', type: 'number', required: false })
    @ApiQuery({ name: 'page', type: 'number', required: false })
    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @ApiOkResponse({ type: KindergartenListItemDto, isArray: true })
    @Get('kindergartens')
    getKindergartens(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
        @Query('area', new ParseArrayPipe({ optional: true })) area?: number[],
        @Query('lang', new ParseArrayPipe({ optional: true })) lang?: number[],
        @Query('pagination', new ParseIntPipe({ optional: true }))
        pagination?: number,
        @Query('page', new ParseIntPipe({ optional: true })) page?: number,
    ) {
        return this.institutionsService.getKindergartens(
            locale,
            pagination,
            page,
            area,
            lang,
        );
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

    @ApiQuery({ name: 'area', type: 'string', required: false })
    @ApiQuery({ name: 'lang', type: 'string', required: false })
    @ApiQuery({ name: 'pagination', type: 'number', required: false })
    @ApiQuery({ name: 'page', type: 'number', required: false })
    @ApiParam({ name: 'locale', enum: LocaleEnum })
    @ApiOkResponse({ type: SchoolDto, isArray: true })
    @Get('schools')
    getSchools(
        @Param('locale', new ParseEnumPipe(LocaleEnum)) locale: LocaleEnum,
        @Query('pagination', new ParseIntPipe({ optional: true }))
        pagination: number,
        @Query('page', new ParseIntPipe({ optional: true })) page: number,
        @Query('area', new ParseArrayPipe({ optional: true })) area?: number[],
    ) {
        return this.institutionsService.getSchools(
            locale,
            pagination,
            page,
            area,
        );
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

    // @Get('languages')
    // getLanguages() {
    //     return this.institutionsService.getLanguages();
    // }
}
