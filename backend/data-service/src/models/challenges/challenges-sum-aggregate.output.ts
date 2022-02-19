import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ChallengesSumAggregate {
  @Field(() => Int, { nullable: true })
  scorce?: number

  @Field(() => Int, { nullable: true })
  max_time?: number

  @Field(() => Int, { nullable: true })
  max_cost?: number
}
