import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateCarInput } from './create-car.input';
import { Types } from 'mongoose';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field(() => ID)
  _id: Types.ObjectId;
}
