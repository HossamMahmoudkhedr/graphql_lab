import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CarService } from './car.service';
import { Car } from './schemas/car.schema';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';

@Resolver(() => Car)
export class CarResolver {
  constructor(private carService: CarService) {}

  @Mutation(() => Car)
  creatCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carService.create(createCarInput);
  }

  @Query(() => [Car], { name: 'cars' })
  findAll() {
    return this.carService.findAll();
  }

  @Query(() => Car, { name: 'car' })
  findOne(@Args('id', { type: () => ID }) id: Types.ObjectId) {
    return this.carService.findOne(id);
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carService.update(updateCarInput);
  }

  @Mutation(() => Car)
  removeCar(@Args('id', { type: () => ID }) id: Types.ObjectId) {
    return this.carService.remove(id);
  }
}
