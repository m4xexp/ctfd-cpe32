import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutShortAnswerQuestionsInput } from './challenges-create-without-short-answer-questions.input'
import { ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput } from './challenges-create-or-connect-without-short-answer-questions.input'
import { ChallengesUpsertWithoutShortAnswerQuestionsInput } from './challenges-upsert-without-short-answer-questions.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutShortAnswerQuestionsInput } from './challenges-update-without-short-answer-questions.input'

@InputType()
export class ChallengesUpdateOneRequiredWithoutShortAnswerQuestionsInput {
  @Field(() => ChallengesCreateWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  create?: ChallengesCreateWithoutShortAnswerQuestionsInput

  @Field(() => ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput

  @Field(() => ChallengesUpsertWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  upsert?: ChallengesUpsertWithoutShortAnswerQuestionsInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  connect?: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  update?: ChallengesUpdateWithoutShortAnswerQuestionsInput
}
