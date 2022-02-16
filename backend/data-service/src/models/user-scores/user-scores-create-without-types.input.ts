import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { UsersCreateNestedOneWithoutUserScoresInput } from '../users/users-create-nested-one-without-user-scores.input'
import { ChallengesCreateNestedOneWithoutUserScoresInput } from '../challenges/challenges-create-nested-one-without-user-scores.input'
import { LevelsCreateNestedOneWithoutUserScoresInput } from '../levels/levels-create-nested-one-without-user-scores.input'
import { CategoriesCreateNestedOneWithoutUserScoresInput } from '../categories/categories-create-nested-one-without-user-scores.input'

@InputType()
export class UserScoresCreateWithoutTypesInput {
  @Field(() => Int, { nullable: true })
  base_score?: number

  @Field(() => Float, { nullable: true })
  time_score?: number

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UsersCreateNestedOneWithoutUserScoresInput, { nullable: false })
  users!: UsersCreateNestedOneWithoutUserScoresInput

  @Field(() => ChallengesCreateNestedOneWithoutUserScoresInput, {
    nullable: false,
  })
  challenges!: ChallengesCreateNestedOneWithoutUserScoresInput

  @Field(() => LevelsCreateNestedOneWithoutUserScoresInput, { nullable: false })
  levels!: LevelsCreateNestedOneWithoutUserScoresInput

  @Field(() => CategoriesCreateNestedOneWithoutUserScoresInput, {
    nullable: false,
  })
  categories!: CategoriesCreateNestedOneWithoutUserScoresInput
}
