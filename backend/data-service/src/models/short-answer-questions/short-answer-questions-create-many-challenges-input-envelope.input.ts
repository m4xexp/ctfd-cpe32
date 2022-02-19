import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ShortAnswerQuestionsCreateManyChallengesInput } from './short-answer-questions-create-many-challenges.input'

@InputType()
export class ShortAnswerQuestionsCreateManyChallengesInputEnvelope {
  @Field(() => [ShortAnswerQuestionsCreateManyChallengesInput], {
    nullable: false,
  })
  data!: Array<ShortAnswerQuestionsCreateManyChallengesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
