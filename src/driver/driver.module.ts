import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverService } from './driver.service';
import { DriverResolver } from './driver.resolver';
import { Driver, DriverSchema } from './schemas/driver.schema';
import { CarModule } from '../car/car.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Driver.name, schema: DriverSchema }]),
    CarModule,
  ],
  providers: [DriverResolver, DriverService],
})
export class DriverModule {}
