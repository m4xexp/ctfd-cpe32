import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithoutLevelsInput } from './user-scores-update-without-levels.input'
import { UserScoresCreateWithoutLevelsInput } from './user-scores-create-without-levels.input'

@InputType()
export class UserScoresUpsertWithWhereUniqueWithoutLevelsInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresUpdateWithoutLevelsInput, { nullable: false })
  update!: UserScoresUpdateWithoutLevelsInput

  @Field(() => UserScoresCreateWithoutLevelsInput, { nullable: false })
  create!: UserScoresCreateWithoutLevelsInput
}
