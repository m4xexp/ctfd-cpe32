import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithoutUsersInput } from './user-scores-update-without-users.input'

@InputType()
export class UserScoresUpdateWithWhereUniqueWithoutUsersInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresUpdateWithoutUsersInput, { nullable: false })
  data!: UserScoresUpdateWithoutUsersInput
}
