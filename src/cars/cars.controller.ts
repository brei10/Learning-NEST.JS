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
    // @Get(':id')
    // getCarById( @Param('id') id ){
    //     if(+id > this.cars.length -1 || +id < 0 ){
    //         return 'not found'
    //     } 
    //     if(Number(+id)) return  this.cars[+id]   
    // }
}
