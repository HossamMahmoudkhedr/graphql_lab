import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(() => ID)
  Id: string;

  @Field({ nullable: false })
  Name: string;

  @Field({ nullable: false })
  Model: string;
}
