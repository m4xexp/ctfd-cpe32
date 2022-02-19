import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class EventsScalarWhereWithAggregatesInput {
  @Field(() => [EventsScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<EventsScalarWhereWithAggregatesInput>

  @Field(() => [EventsScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<EventsScalarWhereWithAggregatesInput>

  @Field(() => [EventsScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<EventsScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  event_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  evnet_description?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  award_badge?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  flag_link?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  question?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  answer?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
