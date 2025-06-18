import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Driver, DriverDocument } from './schemas/driver.schema';
import { CreateDriverInput } from './dto/create-driver.input';
import { UpdateDriverInput } from './dto/update-driver.input';

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver.name) private driverModel: Model<DriverDocument>,
  ) {}

  async create(createDriverInput: CreateDriverInput): Promise<Driver> {
    const createdDriver = new this.driverModel(createDriverInput);
    return createdDriver.save();
  }

  async findAll(): Promise<Driver[]> {
    return this.driverModel.find().exec();
  }

  async findOne(id: Types.ObjectId): Promise<Driver> {
    const driver = await this.driverModel.findById(id).exec();
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return driver;
  }

  async update(updateDriverInput: UpdateDriverInput): Promise<Driver> {
    const updatedDriver = await this.driverModel
      .findByIdAndUpdate(updateDriverInput._id, updateDriverInput, {
        new: true,
      })
      .exec();

    if (!updatedDriver) {
      throw new NotFoundException(
        `Driver with ID ${updateDriverInput._id} not found`,
      );
    }
    return updatedDriver;
  }

  async remove(id: Types.ObjectId): Promise<Driver> {
    const deletedDriver = await this.driverModel.findByIdAndDelete(id).exec();
    if (!deletedDriver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return deletedDriver;
  }
}
