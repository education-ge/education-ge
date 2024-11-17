import { Injectable } from '@nestjs/common';
import { version } from 'package.json';
import { ConfigService } from '@nestjs/config';
import { HealthResponseDto } from './dto/response';

@Injectable()
export class AppService {
    constructor(private readonly configService: ConfigService) {}
    health(): HealthResponseDto {
        return {
            version,
            date: new Date().toUTCString(),
            environment: this.configService.getOrThrow('NODE_ENV'),
        };
    }
}
