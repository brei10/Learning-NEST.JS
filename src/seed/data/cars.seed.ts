import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interface/car.interface";




export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Mercedez',
        model: 'AMG'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'JUM'
    },
    {
        id: uuid(),
        brand: 'zuzuki',
        model: 'x4'
    }
]