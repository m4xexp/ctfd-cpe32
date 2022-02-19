import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithoutLevelsInput } from './user-scores-update-without-levels.input'

@InputType()
export class UserScoresUpdateWithWhereUniqueWithoutLevelsInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresUpdateWithoutLevelsInput, { nullable: false })
  data!: UserScoresUpdateWithoutLevelsInput
}
