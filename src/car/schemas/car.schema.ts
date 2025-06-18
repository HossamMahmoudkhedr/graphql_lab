import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {
  @Prop({ required: true })
  Id: String;

  @Prop()
  Name: String;

  @Prop()
  Model: String;
}

export type carDocument = Car & Document;
export const CarSchema = SchemaFactory.createForClass(Car);
