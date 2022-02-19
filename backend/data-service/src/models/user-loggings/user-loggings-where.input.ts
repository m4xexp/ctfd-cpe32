import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { UsersRelationFilter } from '../users/users-relation-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UserLoggingsWhereInput {
  @Field(() => [UserLoggingsWhereInput], { nullable: true })
  AND?: Array<UserLoggingsWhereInput>

  @Field(() => [UserLoggingsWhereInput], { nullable: true })
  OR?: Array<UserLoggingsWhereInput>

  @Field(() => [UserLoggingsWhereInput], { nullable: true })
  NOT?: Array<UserLoggingsWhereInput>

  @Field(() => StringFilter, { nullable: true })
  log_id?: StringFilter

  @Field(() => UsersRelationFilter, { nullable: true })
  users?: UsersRelationFilter

  @Field(() => StringFilter, { nullable: true })
  user_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  action?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  ip?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
