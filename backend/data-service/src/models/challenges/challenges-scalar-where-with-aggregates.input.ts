import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class ChallengesScalarWhereWithAggregatesInput {
  @Field(() => [ChallengesScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ChallengesScalarWhereWithAggregatesInput>

  @Field(() => [ChallengesScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ChallengesScalarWhereWithAggregatesInput>

  @Field(() => [ChallengesScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ChallengesScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  challenge_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  question?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  level_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  types_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  categories_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  award_badge?: StringWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  scorce?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  max_time?: IntWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  max_cost?: IntWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
