import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Driver extends Document {
  @Prop({ require: true })
  _id: Types.ObjectId;

  @Prop()
  age: number;

  @Prop()
  Name: String;

  @Prop()
  cars: String[];
}

export type DriverDocument = Driver & Document;
export const DriverSchema = SchemaFactory.createForClass(Driver);
