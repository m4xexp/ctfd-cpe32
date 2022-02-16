import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesUpdateWithoutUserScoresInput } from './challenges-update-without-user-scores.input'
import { ChallengesCreateWithoutUserScoresInput } from './challenges-create-without-user-scores.input'

@InputType()
export class ChallengesUpsertWithoutUserScoresInput {
  @Field(() => ChallengesUpdateWithoutUserScoresInput, { nullable: false })
  update!: ChallengesUpdateWithoutUserScoresInput

  @Field(() => ChallengesCreateWithoutUserScoresInput, { nullable: false })
  create!: ChallengesCreateWithoutUserScoresInput
}
