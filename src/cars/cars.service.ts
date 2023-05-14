import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid  } from 'uuid';


@Injectable()
export class CarsService {
   
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    public findAll() {
        return this.cars;
    }

    public findOne(id:string) {
        const carFound = this.cars.find( o => o.id === id);
        console.log({carFound})
        if(!carFound)throw new NotFoundException('cars not found')
    }
}