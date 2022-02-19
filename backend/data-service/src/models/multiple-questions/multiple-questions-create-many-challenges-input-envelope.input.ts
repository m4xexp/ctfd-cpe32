import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleQuestionsCreateManyChallengesInput } from './multiple-questions-create-many-challenges.input'

@InputType()
export class MultipleQuestionsCreateManyChallengesInputEnvelope {
  @Field(() => [MultipleQuestionsCreateManyChallengesInput], {
    nullable: false,
  })
  data!: Array<MultipleQuestionsCreateManyChallengesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
