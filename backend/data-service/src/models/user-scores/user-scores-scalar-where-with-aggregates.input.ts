import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class UserScoresScalarWhereWithAggregatesInput {
  @Field(() => [UserScoresScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScoresScalarWhereWithAggregatesInput>

  @Field(() => [UserScoresScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScoresScalarWhereWithAggregatesInput>

  @Field(() => [UserScoresScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScoresScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  user_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  challenge_id?: StringWithAggregatesFilter

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  base_score?: IntWithAggregatesFilter

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  time_score?: FloatWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  level_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  types_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  categories_id?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
