import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class MultipleChoiceQuestionScalarWhereWithAggregatesInput {
  @Field(() => [MultipleChoiceQuestionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<MultipleChoiceQuestionScalarWhereWithAggregatesInput>

  @Field(() => [MultipleChoiceQuestionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<MultipleChoiceQuestionScalarWhereWithAggregatesInput>

  @Field(() => [MultipleChoiceQuestionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<MultipleChoiceQuestionScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  multiple_choice_question_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  multiple_question_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  answer?: StringWithAggregatesFilter

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  correct_flag?: BoolWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
