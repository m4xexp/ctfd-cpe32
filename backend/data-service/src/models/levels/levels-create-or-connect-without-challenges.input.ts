import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LevelsWhereUniqueInput } from './levels-where-unique.input'
import { LevelsCreateWithoutChallengesInput } from './levels-create-without-challenges.input'

@InputType()
export class LevelsCreateOrConnectWithoutChallengesInput {
  @Field(() => LevelsWhereUniqueInput, { nullable: false })
  where!: LevelsWhereUniqueInput

  @Field(() => LevelsCreateWithoutChallengesInput, { nullable: false })
  create!: LevelsCreateWithoutChallengesInput
}
