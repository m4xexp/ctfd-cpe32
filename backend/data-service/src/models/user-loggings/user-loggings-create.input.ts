import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersCreateNestedOneWithoutUserLoggingsInput } from '../users/users-create-nested-one-without-user-loggings.input'

@InputType()
export class UserLoggingsCreateInput {
  @Field(() => String, { nullable: true })
  log_id?: string

  @Field(() => String, { nullable: false })
  action!: string

  @Field(() => String, { nullable: false })
  ip!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UsersCreateNestedOneWithoutUserLoggingsInput, {
    nullable: false,
  })
  users!: UsersCreateNestedOneWithoutUserLoggingsInput
}
