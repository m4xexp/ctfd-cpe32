import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutMultipleQuestionsInput } from './challenges-create-without-multiple-questions.input'
import { ChallengesCreateOrConnectWithoutMultipleQuestionsInput } from './challenges-create-or-connect-without-multiple-questions.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'

@InputType()
export class ChallengesCreateNestedOneWithoutMultipleQuestionsInput {
  @Field(() => ChallengesCreateWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  create?: ChallengesCreateWithoutMultipleQuestionsInput

  @Field(() => ChallengesCreateOrConnectWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: ChallengesCreateOrConnectWithoutMultipleQuestionsInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  connect?: ChallengesWhereUniqueInput
}
