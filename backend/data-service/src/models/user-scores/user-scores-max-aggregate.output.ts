import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class UserScoresMaxAggregate {
  @Field(() => String, { nullable: true })
  user_id?: string

  @Field(() => String, { nullable: true })
  challenge_id?: string

  @Field(() => Int, { nullable: true })
  base_score?: number

  @Field(() => Float, { nullable: true })
  time_score?: number

  @Field(() => String, { nullable: true })
  level_id?: string

  @Field(() => String, { nullable: true })
  types_id?: string

  @Field(() => String, { nullable: true })
  categories_id?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
