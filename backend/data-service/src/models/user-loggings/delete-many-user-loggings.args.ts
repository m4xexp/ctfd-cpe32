import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserLoggingsWhereInput } from './user-loggings-where.input'

@ArgsType()
export class DeleteManyUserLoggingsArgs {
  @Field(() => UserLoggingsWhereInput, { nullable: true })
  where?: UserLoggingsWhereInput
}
