import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class LevelsMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  level_id?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
