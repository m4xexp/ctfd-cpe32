import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutLevelsInput } from './challenges-update-without-levels.input'
import { ChallengesCreateWithoutLevelsInput } from './challenges-create-without-levels.input'

@InputType()
export class ChallengesUpsertWithWhereUniqueWithoutLevelsInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutLevelsInput, { nullable: false })
  update!: ChallengesUpdateWithoutLevelsInput

  @Field(() => ChallengesCreateWithoutLevelsInput, { nullable: false })
  create!: ChallengesCreateWithoutLevelsInput
}
