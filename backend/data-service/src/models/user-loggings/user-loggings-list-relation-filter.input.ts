import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserLoggingsWhereInput } from './user-loggings-where.input'

@InputType()
export class UserLoggingsListRelationFilter {
  @Field(() => UserLoggingsWhereInput, { nullable: true })
  every?: UserLoggingsWhereInput

  @Field(() => UserLoggingsWhereInput, { nullable: true })
  some?: UserLoggingsWhereInput

  @Field(() => UserLoggingsWhereInput, { nullable: true })
  none?: UserLoggingsWhereInput
}
