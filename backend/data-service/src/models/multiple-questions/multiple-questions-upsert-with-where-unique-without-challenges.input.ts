import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { MultipleQuestionsUpdateWithoutChallengesInput } from './multiple-questions-update-without-challenges.input'
import { MultipleQuestionsCreateWithoutChallengesInput } from './multiple-questions-create-without-challenges.input'

@InputType()
export class MultipleQuestionsUpsertWithWhereUniqueWithoutChallengesInput {
  @Field(() => MultipleQuestionsWhereUniqueInput, { nullable: false })
  where!: MultipleQuestionsWhereUniqueInput

  @Field(() => MultipleQuestionsUpdateWithoutChallengesInput, {
    nullable: false,
  })
  update!: MultipleQuestionsUpdateWithoutChallengesInput

  @Field(() => MultipleQuestionsCreateWithoutChallengesInput, {
    nullable: false,
  })
  create!: MultipleQuestionsCreateWithoutChallengesInput
}
