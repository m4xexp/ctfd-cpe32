import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input'
import { ShortAnswerQuestionsUpdateWithoutChallengesInput } from './short-answer-questions-update-without-challenges.input'

@InputType()
export class ShortAnswerQuestionsUpdateWithWhereUniqueWithoutChallengesInput {
  @Field(() => ShortAnswerQuestionsWhereUniqueInput, { nullable: false })
  where!: ShortAnswerQuestionsWhereUniqueInput

  @Field(() => ShortAnswerQuestionsUpdateWithoutChallengesInput, {
    nullable: false,
  })
  data!: ShortAnswerQuestionsUpdateWithoutChallengesInput
}
