import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresCreateWithoutChallengesInput } from './user-scores-create-without-challenges.input'

@InputType()
export class UserScoresCreateOrConnectWithoutChallengesInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresCreateWithoutChallengesInput, { nullable: false })
  create!: UserScoresCreateWithoutChallengesInput
}
