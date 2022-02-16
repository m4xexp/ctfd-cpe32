import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutShortAnswerQuestionsInput } from './challenges-create-without-short-answer-questions.input'
import { ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput } from './challenges-create-or-connect-without-short-answer-questions.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'

@InputType()
export class ChallengesCreateNestedOneWithoutShortAnswerQuestionsInput {
  @Field(() => ChallengesCreateWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  create?: ChallengesCreateWithoutShortAnswerQuestionsInput

  @Field(() => ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: ChallengesCreateOrConnectWithoutShortAnswerQuestionsInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  connect?: ChallengesWhereUniqueInput
}
