import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
 

@Controller('cars')
export class CarsController {

    constructor(
        // injection dependences
        private readonly carsService: CarsService
    ) {}

    @Get('/')
    getAllCars() {
        return this.carsService.findAll();
    }
    @Get(':id')
    getCarById( @Param('id') id ){
         return this.carsService.findOne(+id);
    }
}
