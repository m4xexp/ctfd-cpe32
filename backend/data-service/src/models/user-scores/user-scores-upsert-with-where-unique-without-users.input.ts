import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithoutUsersInput } from './user-scores-update-without-users.input'
import { UserScoresCreateWithoutUsersInput } from './user-scores-create-without-users.input'

@InputType()
export class UserScoresUpsertWithWhereUniqueWithoutUsersInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresUpdateWithoutUsersInput, { nullable: false })
  update!: UserScoresUpdateWithoutUsersInput

  @Field(() => UserScoresCreateWithoutUsersInput, { nullable: false })
  create!: UserScoresCreateWithoutUsersInput
}
