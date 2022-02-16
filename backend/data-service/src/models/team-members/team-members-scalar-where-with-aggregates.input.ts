import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class TeamMembersScalarWhereWithAggregatesInput {
  @Field(() => [TeamMembersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TeamMembersScalarWhereWithAggregatesInput>

  @Field(() => [TeamMembersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TeamMembersScalarWhereWithAggregatesInput>

  @Field(() => [TeamMembersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TeamMembersScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  user_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  team_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  type?: StringWithAggregatesFilter

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  status?: BoolWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
