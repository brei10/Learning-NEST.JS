import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service'
import { BrandsService } from '../brands/brands.service'
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  
  constructor(
    // injection dependences
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService
) {}


  populateDB (){
    this.CarsService.fillCarsWithSeedData( CARS_SEED );
    this.BrandsService.fillBrandsWithSeedData( BRANDS_SEED );
  }
}
