import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithoutChallengesInput } from './user-scores-update-without-challenges.input'
import { UserScoresCreateWithoutChallengesInput } from './user-scores-create-without-challenges.input'

@InputType()
export class UserScoresUpsertWithWhereUniqueWithoutChallengesInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresUpdateWithoutChallengesInput, { nullable: false })
  update!: UserScoresUpdateWithoutChallengesInput

  @Field(() => UserScoresCreateWithoutChallengesInput, { nullable: false })
  create!: UserScoresCreateWithoutChallengesInput
}
