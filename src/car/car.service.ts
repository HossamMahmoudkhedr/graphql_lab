import { Injectable, NotFoundException } from '@nestjs/common';
import mongoose, { Model, Types } from 'mongoose';
import { Car, carDocument, CarSchema } from './schemas/car.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<carDocument>) {}

  async create(createCarInput: CreateCarInput): Promise<Car> {
    const createdCar = new this.carModel(createCarInput);
    return createdCar.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id: Types.ObjectId): Promise<Car> {
    const car = await this.carModel.findOne(id).exec();
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return car;
  }

  async findByDriverId(driverId: Types.ObjectId): Promise<Car> {
    const car = await this.carModel.findOne({ driverId }).exec();

    if (!car) {
      throw new NotFoundException(`Car with driverId ${driverId} not found`);
    }

    return car;
  }

  async update(updateCarInput: UpdateCarInput): Promise<Car> {
    const updatedCar = await this.carModel
      .findByIdAndUpdate(updateCarInput._id, updateCarInput, { new: true })
      .exec();

    if (!updatedCar) {
      throw new NotFoundException(
        `Car with id ${updateCarInput._id} not found`,
      );
    }

    return updatedCar;
  }

  async remove(id: Types.ObjectId): Promise<Car> {
    const deletedCar = await this.carModel.findByIdAndDelete(id).exec();

    if (!deletedCar) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    return deletedCar;
  }
}
