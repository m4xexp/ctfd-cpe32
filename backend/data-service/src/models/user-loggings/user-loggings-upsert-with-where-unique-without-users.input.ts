import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input'
import { UserLoggingsUpdateWithoutUsersInput } from './user-loggings-update-without-users.input'
import { UserLoggingsCreateWithoutUsersInput } from './user-loggings-create-without-users.input'

@InputType()
export class UserLoggingsUpsertWithWhereUniqueWithoutUsersInput {
  @Field(() => UserLoggingsWhereUniqueInput, { nullable: false })
  where!: UserLoggingsWhereUniqueInput

  @Field(() => UserLoggingsUpdateWithoutUsersInput, { nullable: false })
  update!: UserLoggingsUpdateWithoutUsersInput

  @Field(() => UserLoggingsCreateWithoutUsersInput, { nullable: false })
  create!: UserLoggingsCreateWithoutUsersInput
}
