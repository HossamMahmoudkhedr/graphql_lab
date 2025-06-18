import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Types } from 'mongoose';
import { DriverService } from './driver.service';
import { CarService } from '../car/car.service';
import { Driver } from './schemas/driver.schema';
import { Car } from '../car/schemas/car.schema';
import { CreateDriverInput } from './dto/create-driver.input';
import { UpdateDriverInput } from './dto/update-driver.input';

@Resolver(() => Driver)
export class DriverResolver {
  constructor(
    private readonly driverService: DriverService,
    private readonly carService: CarService,
  ) {}

  @Mutation(() => Driver)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ) {
    return this.driverService.create(createDriverInput);
  }

  @Query(() => [Driver], { name: 'drivers' })
  findAll() {
    return this.driverService.findAll();
  }

  @Query(() => Driver, { name: 'driver' })
  findOne(@Args('id', { type: () => ID }) id: Types.ObjectId) {
    return this.driverService.findOne(id);
  }

  @Mutation(() => Driver)
  updateDriver(
    @Args('updateDriverInput') updateDriverInput: UpdateDriverInput,
  ) {
    return this.driverService.update(updateDriverInput);
  }

  @Mutation(() => Driver)
  removeDriver(@Args('id', { type: () => ID }) id: Types.ObjectId) {
    return this.driverService.remove(id);
  }

  @ResolveField(() => [Car])
  cars(@Parent() driver: Driver) {
    return this.carService.findByDriverId(driver._id);
  }
}
