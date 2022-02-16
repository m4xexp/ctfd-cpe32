import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'
import { UsersCreateNestedOneWithoutUserScoresInput } from '../users/users-create-nested-one-without-user-scores.input'
import { ChallengesCreateNestedOneWithoutUserScoresInput } from '../challenges/challenges-create-nested-one-without-user-scores.input'
import { TypesCreateNestedOneWithoutUserScoresInput } from '../types/types-create-nested-one-without-user-scores.input'
import { CategoriesCreateNestedOneWithoutUserScoresInput } from '../categories/categories-create-nested-one-without-user-scores.input'

@InputType()
export class UserScoresCreateWithoutLevelsInput {
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

  @Field(() => TypesCreateNestedOneWithoutUserScoresInput, { nullable: false })
  types!: TypesCreateNestedOneWithoutUserScoresInput

  @Field(() => CategoriesCreateNestedOneWithoutUserScoresInput, {
    nullable: false,
  })
  categories!: CategoriesCreateNestedOneWithoutUserScoresInput
}
