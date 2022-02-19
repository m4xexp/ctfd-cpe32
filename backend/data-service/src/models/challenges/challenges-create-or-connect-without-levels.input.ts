import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesCreateWithoutLevelsInput } from './challenges-create-without-levels.input'

@InputType()
export class ChallengesCreateOrConnectWithoutLevelsInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesCreateWithoutLevelsInput, { nullable: false })
  create!: ChallengesCreateWithoutLevelsInput
}
