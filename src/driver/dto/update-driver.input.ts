import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { CreateDriverInput } from './create-driver.input';

@InputType()
export class UpdateDriverInput extends PartialType(CreateDriverInput) {
  @Field(() => ID)
  _id: Types.ObjectId;
}
