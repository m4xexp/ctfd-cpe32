import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class UserScoresCountAggregate {
  @Field(() => Int, { nullable: false })
  user_id!: number

  @Field(() => Int, { nullable: false })
  challenge_id!: number

  @Field(() => Int, { nullable: false })
  base_score!: number

  @Field(() => Int, { nullable: false })
  time_score!: number

  @Field(() => Int, { nullable: false })
  level_id!: number

  @Field(() => Int, { nullable: false })
  types_id!: number

  @Field(() => Int, { nullable: false })
  categories_id!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
