import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserScoresAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  base_score?: true

  @Field(() => Boolean, { nullable: true })
  time_score?: true
}
