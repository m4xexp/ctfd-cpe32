import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutUserScoresInput } from './challenges-create-without-user-scores.input'
import { ChallengesCreateOrConnectWithoutUserScoresInput } from './challenges-create-or-connect-without-user-scores.input'
import { ChallengesUpsertWithoutUserScoresInput } from './challenges-upsert-without-user-scores.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesUpdateWithoutUserScoresInput } from './challenges-update-without-user-scores.input'

@InputType()
export class ChallengesUpdateOneRequiredWithoutUserScoresInput {
  @Field(() => ChallengesCreateWithoutUserScoresInput, { nullable: true })
  create?: ChallengesCreateWithoutUserScoresInput

  @Field(() => ChallengesCreateOrConnectWithoutUserScoresInput, {
    nullable: true,
  })
  connectOrCreate?: ChallengesCreateOrConnectWithoutUserScoresInput

  @Field(() => ChallengesUpsertWithoutUserScoresInput, { nullable: true })
  upsert?: ChallengesUpsertWithoutUserScoresInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  connect?: ChallengesWhereUniqueInput

  @Field(() => ChallengesUpdateWithoutUserScoresInput, { nullable: true })
  update?: ChallengesUpdateWithoutUserScoresInput
}
