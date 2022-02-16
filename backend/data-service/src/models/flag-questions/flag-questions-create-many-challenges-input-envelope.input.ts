import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FlagQuestionsCreateManyChallengesInput } from './flag-questions-create-many-challenges.input'

@InputType()
export class FlagQuestionsCreateManyChallengesInputEnvelope {
  @Field(() => [FlagQuestionsCreateManyChallengesInput], { nullable: false })
  data!: Array<FlagQuestionsCreateManyChallengesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
