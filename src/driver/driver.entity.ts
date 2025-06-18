import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Driver {
  @Field(() => ID)
  Id: string;

  @Field({ nullable: false })
  Name: string;

  @Field({ nullable: false })
  age: number;

  @Field({ nullable: false })
  cars: string[];
}
