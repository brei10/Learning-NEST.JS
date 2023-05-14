import { Body, Controller, Get, Param,
     ParseIntPipe, Post, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
 

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
    getCarById( @Param('id', ParseUUIDPipe ) id:string ){
         return this.carsService.findOne(id);
    }

    @Post('/')
    createCar( @Body() createCarDto: CreateCarDto ){
        return createCarDto;
    }

    @Patch(':id')
    updateCar( @Body() body: any ){
        return body;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id ){
        console.log({id})
        return {
            method: "delete",
            id
        }
    }
}
