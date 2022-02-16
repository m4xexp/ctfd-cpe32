import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersCreateWithoutUserLoggingsInput } from './users-create-without-user-loggings.input'
import { UsersCreateOrConnectWithoutUserLoggingsInput } from './users-create-or-connect-without-user-loggings.input'
import { UsersWhereUniqueInput } from './users-where-unique.input'

@InputType()
export class UsersCreateNestedOneWithoutUserLoggingsInput {
  @Field(() => UsersCreateWithoutUserLoggingsInput, { nullable: true })
  create?: UsersCreateWithoutUserLoggingsInput

  @Field(() => UsersCreateOrConnectWithoutUserLoggingsInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutUserLoggingsInput

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput
}
