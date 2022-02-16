import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class BadgesScalarWhereWithAggregatesInput {
  @Field(() => [BadgesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BadgesScalarWhereWithAggregatesInput>

  @Field(() => [BadgesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BadgesScalarWhereWithAggregatesInput>

  @Field(() => [BadgesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BadgesScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  badge_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  condition?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  link?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  status?: BoolWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
