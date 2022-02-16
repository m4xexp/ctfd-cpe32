import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LevelsCreateWithoutChallengesInput } from './levels-create-without-challenges.input'
import { LevelsCreateOrConnectWithoutChallengesInput } from './levels-create-or-connect-without-challenges.input'
import { LevelsUpsertWithoutChallengesInput } from './levels-upsert-without-challenges.input'
import { LevelsWhereUniqueInput } from './levels-where-unique.input'
import { LevelsUpdateWithoutChallengesInput } from './levels-update-without-challenges.input'

@InputType()
export class LevelsUpdateOneRequiredWithoutChallengesInput {
  @Field(() => LevelsCreateWithoutChallengesInput, { nullable: true })
  create?: LevelsCreateWithoutChallengesInput

  @Field(() => LevelsCreateOrConnectWithoutChallengesInput, { nullable: true })
  connectOrCreate?: LevelsCreateOrConnectWithoutChallengesInput

  @Field(() => LevelsUpsertWithoutChallengesInput, { nullable: true })
  upsert?: LevelsUpsertWithoutChallengesInput

  @Field(() => LevelsWhereUniqueInput, { nullable: true })
  connect?: LevelsWhereUniqueInput

  @Field(() => LevelsUpdateWithoutChallengesInput, { nullable: true })
  update?: LevelsUpdateWithoutChallengesInput
}
