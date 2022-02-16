import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutBadgesInput } from './challenges-update-without-badges.input'
import { ChallengesCreateWithoutBadgesInput } from './challenges-create-without-badges.input'

@InputType()
export class ChallengesUpsertWithWhereUniqueWithoutBadgesInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutBadgesInput, { nullable: false })
  update!: ChallengesUpdateWithoutBadgesInput

  @Field(() => ChallengesCreateWithoutBadgesInput, { nullable: false })
  create!: ChallengesCreateWithoutBadgesInput
}
