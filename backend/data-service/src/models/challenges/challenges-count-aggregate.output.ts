import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ChallengesCountAggregate {
  @Field(() => Int, { nullable: false })
  challenge_id!: number

  @Field(() => Int, { nullable: false })
  name!: number

  @Field(() => Int, { nullable: false })
  question!: number

  @Field(() => Int, { nullable: false })
  description!: number

  @Field(() => Int, { nullable: false })
  level_id!: number

  @Field(() => Int, { nullable: false })
  types_id!: number

  @Field(() => Int, { nullable: false })
  categories_id!: number

  @Field(() => Int, { nullable: false })
  award_badge!: number

  @Field(() => Int, { nullable: false })
  scorce!: number

  @Field(() => Int, { nullable: false })
  max_time!: number

  @Field(() => Int, { nullable: false })
  max_cost!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
