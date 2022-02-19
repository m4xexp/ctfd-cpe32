import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesCreateWithoutUserScoresInput } from './challenges-create-without-user-scores.input'

@InputType()
export class ChallengesCreateOrConnectWithoutUserScoresInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesCreateWithoutUserScoresInput, { nullable: false })
  create!: ChallengesCreateWithoutUserScoresInput
}
