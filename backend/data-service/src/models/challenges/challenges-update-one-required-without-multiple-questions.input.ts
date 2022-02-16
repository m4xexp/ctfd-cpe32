import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutMultipleQuestionsInput } from './challenges-create-without-multiple-questions.input'
import { ChallengesCreateOrConnectWithoutMultipleQuestionsInput } from './challenges-create-or-connect-without-multiple-questions.input'
import { ChallengesUpsertWithoutMultipleQuestionsInput } from './challenges-upsert-without-multiple-questions.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutMultipleQuestionsInput } from './challenges-update-without-multiple-questions.input'

@InputType()
export class ChallengesUpdateOneRequiredWithoutMultipleQuestionsInput {
  @Field(() => ChallengesCreateWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  create?: ChallengesCreateWithoutMultipleQuestionsInput

  @Field(() => ChallengesCreateOrConnectWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  connectOrCreate?: ChallengesCreateOrConnectWithoutMultipleQuestionsInput

  @Field(() => ChallengesUpsertWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  upsert?: ChallengesUpsertWithoutMultipleQuestionsInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  connect?: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  update?: ChallengesUpdateWithoutMultipleQuestionsInput
}
