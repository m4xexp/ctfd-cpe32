import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input'
import { ShortAnswerQuestionsUpdateWithoutChallengesInput } from './short-answer-questions-update-without-challenges.input'
import { ShortAnswerQuestionsCreateWithoutChallengesInput } from './short-answer-questions-create-without-challenges.input'

@InputType()
export class ShortAnswerQuestionsUpsertWithWhereUniqueWithoutChallengesInput {
  @Field(() => ShortAnswerQuestionsWhereUniqueInput, { nullable: false })
  where!: ShortAnswerQuestionsWhereUniqueInput

  @Field(() => ShortAnswerQuestionsUpdateWithoutChallengesInput, {
    nullable: false,
  })
  update!: ShortAnswerQuestionsUpdateWithoutChallengesInput

  @Field(() => ShortAnswerQuestionsCreateWithoutChallengesInput, {
    nullable: false,
  })
  create!: ShortAnswerQuestionsCreateWithoutChallengesInput
}
