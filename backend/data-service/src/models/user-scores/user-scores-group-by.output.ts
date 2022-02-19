import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { UserScoresCountAggregate } from './user-scores-count-aggregate.output'
import { UserScoresAvgAggregate } from './user-scores-avg-aggregate.output'
import { UserScoresSumAggregate } from './user-scores-sum-aggregate.output'
import { UserScoresMinAggregate } from './user-scores-min-aggregate.output'
import { UserScoresMaxAggregate } from './user-scores-max-aggregate.output'

@ObjectType()
export class UserScoresGroupBy {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  challenge_id!: string

  @Field(() => Int, { nullable: false })
  base_score!: number

  @Field(() => Float, { nullable: false })
  time_score!: number

  @Field(() => String, { nullable: false })
  level_id!: string

  @Field(() => String, { nullable: false })
  types_id!: string

  @Field(() => String, { nullable: false })
  categories_id!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => UserScoresCountAggregate, { nullable: true })
  _count?: UserScoresCountAggregate

  @Field(() => UserScoresAvgAggregate, { nullable: true })
  _avg?: UserScoresAvgAggregate

  @Field(() => UserScoresSumAggregate, { nullable: true })
  _sum?: UserScoresSumAggregate

  @Field(() => UserScoresMinAggregate, { nullable: true })
  _min?: UserScoresMinAggregate

  @Field(() => UserScoresMaxAggregate, { nullable: true })
  _max?: UserScoresMaxAggregate
}
