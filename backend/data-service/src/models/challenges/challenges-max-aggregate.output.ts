import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ChallengesMaxAggregate {
  @Field(() => String, { nullable: true })
  challenge_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  question?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => String, { nullable: true })
  level_id?: string

  @Field(() => String, { nullable: true })
  types_id?: string

  @Field(() => String, { nullable: true })
  categories_id?: string

  @Field(() => String, { nullable: true })
  award_badge?: string

  @Field(() => Int, { nullable: true })
  scorce?: number

  @Field(() => Int, { nullable: true })
  max_time?: number

  @Field(() => Int, { nullable: true })
  max_cost?: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
