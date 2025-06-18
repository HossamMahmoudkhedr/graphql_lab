import { Field, InputType } from '@nestjs/graphql';
import {
  IsArray,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

@InputType()
export class CreateDriverInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @Field()
  @IsNotEmpty()
  @IsArray()
  cars: string[];
}
