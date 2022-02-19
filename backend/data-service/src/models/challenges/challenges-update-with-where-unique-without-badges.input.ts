import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutBadgesInput } from './challenges-update-without-badges.input'

@InputType()
export class ChallengesUpdateWithWhereUniqueWithoutBadgesInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutBadgesInput, { nullable: false })
  data!: ChallengesUpdateWithoutBadgesInput
}
