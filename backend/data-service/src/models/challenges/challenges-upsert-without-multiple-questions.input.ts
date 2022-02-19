import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesUpdateWithoutMultipleQuestionsInput } from './challenges-update-without-multiple-questions.input'
import { ChallengesCreateWithoutMultipleQuestionsInput } from './challenges-create-without-multiple-questions.input'

@InputType()
export class ChallengesUpsertWithoutMultipleQuestionsInput {
  @Field(() => ChallengesUpdateWithoutMultipleQuestionsInput, {
    nullable: false,
  })
  update!: ChallengesUpdateWithoutMultipleQuestionsInput

  @Field(() => ChallengesCreateWithoutMultipleQuestionsInput, {
    nullable: false,
  })
  create!: ChallengesCreateWithoutMultipleQuestionsInput
}
