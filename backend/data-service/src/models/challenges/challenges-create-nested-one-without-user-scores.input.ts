import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesCreateWithoutUserScoresInput } from './challenges-create-without-user-scores.input'
import { ChallengesCreateOrConnectWithoutUserScoresInput } from './challenges-create-or-connect-without-user-scores.input'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'

@InputType()
export class ChallengesCreateNestedOneWithoutUserScoresInput {
  @Field(() => ChallengesCreateWithoutUserScoresInput, { nullable: true })
  create?: ChallengesCreateWithoutUserScoresInput

  @Field(() => ChallengesCreateOrConnectWithoutUserScoresInput, {
    nullable: true,
  })
  connectOrCreate?: ChallengesCreateOrConnectWithoutUserScoresInput

  @Field(() => ChallengesWhereUniqueInput, { nullable: true })
  connect?: ChallengesWhereUniqueInput
}
