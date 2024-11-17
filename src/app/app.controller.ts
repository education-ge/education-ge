import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthResponseDto } from './dto/response';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('health')
    health(): HealthResponseDto {
        return this.appService.health();
    }
}
