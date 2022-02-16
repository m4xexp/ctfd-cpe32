import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresCreateWithoutChallengesInput } from './user-scores-create-without-challenges.input'
import { UserScoresCreateOrConnectWithoutChallengesInput } from './user-scores-create-or-connect-without-challenges.input'
import { UserScoresCreateManyChallengesInputEnvelope } from './user-scores-create-many-challenges-input-envelope.input'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'

@InputType()
export class UserScoresCreateNestedManyWithoutChallengesInput {
  @Field(() => [UserScoresCreateWithoutChallengesInput], { nullable: true })
  create?: Array<UserScoresCreateWithoutChallengesInput>

  @Field(() => [UserScoresCreateOrConnectWithoutChallengesInput], {
    nullable: true,
  })
  connectOrCreate?: Array<UserScoresCreateOrConnectWithoutChallengesInput>

  @Field(() => UserScoresCreateManyChallengesInputEnvelope, { nullable: true })
  createMany?: UserScoresCreateManyChallengesInputEnvelope

  @Field(() => [UserScoresWhereUniqueInput], { nullable: true })
  connect?: Array<UserScoresWhereUniqueInput>
}
