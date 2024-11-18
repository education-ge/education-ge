import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { InstitutionsService } from './institutions.service';
import { CreateKindergartenDto, CreateSchoolDto } from './dto/request';

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

    @Get('kindergartens')
    getKindergartens() {
        return this.institutionsService.getKindergartens();
    }

    @Get('kindergartens/:id')
    getKindergarten(@Param('id', ParseIntPipe) kindergartenId: number) {
        return this.institutionsService.getKindergartenById(kindergartenId);
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

    @Get('schools')
    getSchools() {
        return this.institutionsService.getSchools();
    }

    @Get('schools/:id')
    getSchool(@Param('id', ParseIntPipe) schoolId: number) {
        return this.institutionsService.getSchool(schoolId);
    }
}
