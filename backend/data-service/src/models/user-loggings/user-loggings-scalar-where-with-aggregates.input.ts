import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class UserLoggingsScalarWhereWithAggregatesInput {
  @Field(() => [UserLoggingsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserLoggingsScalarWhereWithAggregatesInput>

  @Field(() => [UserLoggingsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserLoggingsScalarWhereWithAggregatesInput>

  @Field(() => [UserLoggingsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserLoggingsScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  log_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  user_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  action?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  ip?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
