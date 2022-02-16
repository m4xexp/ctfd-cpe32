import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input'
import { UserLoggingsCreateWithoutUsersInput } from './user-loggings-create-without-users.input'

@InputType()
export class UserLoggingsCreateOrConnectWithoutUsersInput {
  @Field(() => UserLoggingsWhereUniqueInput, { nullable: false })
  where!: UserLoggingsWhereUniqueInput

  @Field(() => UserLoggingsCreateWithoutUsersInput, { nullable: false })
  create!: UserLoggingsCreateWithoutUsersInput
}
