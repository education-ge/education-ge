import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaEntity, CityEntity } from './entities';

@Module({
    controllers: [CitiesController],
    providers: [CitiesService],
    imports: [TypeOrmModule.forFeature([CityEntity, AreaEntity])],
})
export class CitiesModule {}
