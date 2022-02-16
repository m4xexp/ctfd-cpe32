import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'
import { UserBadgesUpdateWithoutUsersInput } from './user-badges-update-without-users.input'

@InputType()
export class UserBadgesUpdateWithWhereUniqueWithoutUsersInput {
  @Field(() => UserBadgesWhereUniqueInput, { nullable: false })
  where!: UserBadgesWhereUniqueInput

  @Field(() => UserBadgesUpdateWithoutUsersInput, { nullable: false })
  data!: UserBadgesUpdateWithoutUsersInput
}
