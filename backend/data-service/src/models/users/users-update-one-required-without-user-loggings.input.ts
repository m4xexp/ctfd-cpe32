import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersCreateWithoutUserLoggingsInput } from './users-create-without-user-loggings.input'
import { UsersCreateOrConnectWithoutUserLoggingsInput } from './users-create-or-connect-without-user-loggings.input'
import { UsersUpsertWithoutUserLoggingsInput } from './users-upsert-without-user-loggings.input'
import { UsersWhereUniqueInput } from './users-where-unique.input'
import { UsersUpdateWithoutUserLoggingsInput } from './users-update-without-user-loggings.input'

@InputType()
export class UsersUpdateOneRequiredWithoutUserLoggingsInput {
  @Field(() => UsersCreateWithoutUserLoggingsInput, { nullable: true })
  create?: UsersCreateWithoutUserLoggingsInput

  @Field(() => UsersCreateOrConnectWithoutUserLoggingsInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutUserLoggingsInput

  @Field(() => UsersUpsertWithoutUserLoggingsInput, { nullable: true })
  upsert?: UsersUpsertWithoutUserLoggingsInput

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput

  @Field(() => UsersUpdateWithoutUserLoggingsInput, { nullable: true })
  update?: UsersUpdateWithoutUserLoggingsInput
}
