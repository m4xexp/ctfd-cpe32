import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesUpdateWithoutFlagQuestionsInput } from './challenges-update-without-flag-questions.input'
import { ChallengesCreateWithoutFlagQuestionsInput } from './challenges-create-without-flag-questions.input'

@InputType()
export class ChallengesUpsertWithoutFlagQuestionsInput {
  @Field(() => ChallengesUpdateWithoutFlagQuestionsInput, { nullable: false })
  update!: ChallengesUpdateWithoutFlagQuestionsInput

  @Field(() => ChallengesCreateWithoutFlagQuestionsInput, { nullable: false })
  create!: ChallengesCreateWithoutFlagQuestionsInput
}
