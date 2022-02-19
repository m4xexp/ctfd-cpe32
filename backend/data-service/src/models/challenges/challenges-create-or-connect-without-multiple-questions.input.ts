import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesCreateWithoutMultipleQuestionsInput } from './challenges-create-without-multiple-questions.input'

@InputType()
export class ChallengesCreateOrConnectWithoutMultipleQuestionsInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesCreateWithoutMultipleQuestionsInput, {
    nullable: false,
  })
  create!: ChallengesCreateWithoutMultipleQuestionsInput
}
