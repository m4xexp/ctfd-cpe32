import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { LevelsCreateNestedOneWithoutChallengesInput } from '../levels/levels-create-nested-one-without-challenges.input'
import { TypesCreateNestedOneWithoutChallengesInput } from '../types/types-create-nested-one-without-challenges.input'
import { CategoriesCreateNestedOneWithoutChallengesInput } from '../categories/categories-create-nested-one-without-challenges.input'
import { BadgesCreateNestedOneWithoutChallengesInput } from '../badges/badges-create-nested-one-without-challenges.input'
import { UserScoresCreateNestedManyWithoutChallengesInput } from '../user-scores/user-scores-create-nested-many-without-challenges.input'
import { MultipleQuestionsCreateNestedManyWithoutChallengesInput } from '../multiple-questions/multiple-questions-create-nested-many-without-challenges.input'
import { ShortAnswerQuestionsCreateNestedManyWithoutChallengesInput } from '../short-answer-questions/short-answer-questions-create-nested-many-without-challenges.input'

@InputType()
export class ChallengesCreateWithoutFlagQuestionsInput {
  @Field(() => String, { nullable: true })
  challenge_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  question?: string

  @Field(() => String, { nullable: true })
  description?: string

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

  @Field(() => LevelsCreateNestedOneWithoutChallengesInput, { nullable: false })
  levels!: LevelsCreateNestedOneWithoutChallengesInput

  @Field(() => TypesCreateNestedOneWithoutChallengesInput, { nullable: false })
  types!: TypesCreateNestedOneWithoutChallengesInput

  @Field(() => CategoriesCreateNestedOneWithoutChallengesInput, {
    nullable: false,
  })
  categories!: CategoriesCreateNestedOneWithoutChallengesInput

  @Field(() => BadgesCreateNestedOneWithoutChallengesInput, { nullable: false })
  badges!: BadgesCreateNestedOneWithoutChallengesInput

  @Field(() => UserScoresCreateNestedManyWithoutChallengesInput, {
    nullable: true,
  })
  userScores?: UserScoresCreateNestedManyWithoutChallengesInput

  @Field(() => MultipleQuestionsCreateNestedManyWithoutChallengesInput, {
    nullable: true,
  })
  multipleQuestions?: MultipleQuestionsCreateNestedManyWithoutChallengesInput

  @Field(() => ShortAnswerQuestionsCreateNestedManyWithoutChallengesInput, {
    nullable: true,
  })
  shortAnswerQuestions?: ShortAnswerQuestionsCreateNestedManyWithoutChallengesInput
}
