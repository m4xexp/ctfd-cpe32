import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresCreateWithoutLevelsInput } from './user-scores-create-without-levels.input'

@InputType()
export class UserScoresCreateOrConnectWithoutLevelsInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresCreateWithoutLevelsInput, { nullable: false })
  create!: UserScoresCreateWithoutLevelsInput
}
