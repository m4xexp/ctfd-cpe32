import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateManyChallengesInput } from './user-scores-create-many-challenges.input'

@InputType()
export class UserScoresCreateManyChallengesInputEnvelope {
  @Field(() => [UserScoresCreateManyChallengesInput], { nullable: false })
  data!: Array<UserScoresCreateManyChallengesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
