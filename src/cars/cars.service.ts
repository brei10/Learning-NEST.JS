import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interface/car.interface';
import { v4 as uuid  } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';


@Injectable()
export class CarsService {
   
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // },
    ];

    public findAll() {
        return this.cars;
    }

    public findOne(id:string) {
        const carFound = this.cars.find( o => o.id === id);
        if(!carFound)throw new NotFoundException('cars not found');
        return carFound;
    }

    public createCar(carData: CreateCarDTO){
        const { brand, model } = carData;
        const carNew = { id: uuid(), brand, model };
        this.cars.push(carNew);
        return carNew;
    }

    public update(id: string ,updateCar: UpdateCarDTO){
        // exist card in the db
        let carFound = this.findOne(id);
        this.cars = this.cars.map( car => {
            if(car.id === id){
                carFound = { ...carFound,  ...updateCar,  id }
                return carFound;
            }
        })
        return carFound;
    }

    public delete(id: string ){
        // exist card in the db
        this.findOne(id);
        this.cars = this.cars.filter( car => car.id !== id)
        return {success:true}
    }

    public fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    }
}