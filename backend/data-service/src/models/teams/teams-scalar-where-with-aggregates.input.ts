import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class TeamsScalarWhereWithAggregatesInput {
  @Field(() => [TeamsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TeamsScalarWhereWithAggregatesInput>

  @Field(() => [TeamsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TeamsScalarWhereWithAggregatesInput>

  @Field(() => [TeamsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TeamsScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  team_id?: StringWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  team_profile_pic?: StringNullableWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  conuntry_code?: StringWithAggregatesFilter

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  banned?: BoolWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  github_link?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  twitter_link?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  facebook_link?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
