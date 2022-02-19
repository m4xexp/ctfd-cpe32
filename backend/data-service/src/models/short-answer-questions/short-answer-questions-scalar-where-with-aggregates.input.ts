import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class ShortAnswerQuestionsScalarWhereWithAggregatesInput {
  @Field(() => [ShortAnswerQuestionsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<ShortAnswerQuestionsScalarWhereWithAggregatesInput>

  @Field(() => [ShortAnswerQuestionsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<ShortAnswerQuestionsScalarWhereWithAggregatesInput>

  @Field(() => [ShortAnswerQuestionsScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<ShortAnswerQuestionsScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  short_answer_question_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  challenge_id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  question?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  hint?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  answer?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
