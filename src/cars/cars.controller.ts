import { Body, Controller, Get, Param,
     ParseIntPipe, Post, Patch, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';
 

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
    createCar( @Body() createCarDto: CreateCarDTO ){
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCar: UpdateCarDTO
         )
    {
        return this.carsService.update(id, updateCar) ;
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id:string ){
        return this.carsService.delete(id);
    }
}
