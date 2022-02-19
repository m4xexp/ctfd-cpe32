import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LevelsCreateWithoutChallengesInput } from './levels-create-without-challenges.input'
import { LevelsCreateOrConnectWithoutChallengesInput } from './levels-create-or-connect-without-challenges.input'
import { LevelsWhereUniqueInput } from './levels-where-unique.input'

@InputType()
export class LevelsCreateNestedOneWithoutChallengesInput {
  @Field(() => LevelsCreateWithoutChallengesInput, { nullable: true })
  create?: LevelsCreateWithoutChallengesInput

  @Field(() => LevelsCreateOrConnectWithoutChallengesInput, { nullable: true })
  connectOrCreate?: LevelsCreateOrConnectWithoutChallengesInput

  @Field(() => LevelsWhereUniqueInput, { nullable: true })
  connect?: LevelsWhereUniqueInput
}
