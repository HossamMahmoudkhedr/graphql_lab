import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

@InputType()
export class CreateCarInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  model: string;

  @Field(() => ID)
  @IsNotEmpty()
  driverId: Types.ObjectId;
}
