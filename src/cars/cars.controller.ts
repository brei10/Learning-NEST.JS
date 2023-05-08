import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    @Get('prueba')
    getAllCars() {
        return ['Toyota', 'Honda', 'Jeep']
    }
}
