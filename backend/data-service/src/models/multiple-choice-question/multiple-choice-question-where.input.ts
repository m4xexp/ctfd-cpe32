import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { MultipleQuestionsRelationFilter } from '../multiple-questions/multiple-questions-relation-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class MultipleChoiceQuestionWhereInput {
  @Field(() => [MultipleChoiceQuestionWhereInput], { nullable: true })
  AND?: Array<MultipleChoiceQuestionWhereInput>

  @Field(() => [MultipleChoiceQuestionWhereInput], { nullable: true })
  OR?: Array<MultipleChoiceQuestionWhereInput>

  @Field(() => [MultipleChoiceQuestionWhereInput], { nullable: true })
  NOT?: Array<MultipleChoiceQuestionWhereInput>

  @Field(() => StringFilter, { nullable: true })
  multiple_choice_question_id?: StringFilter

  @Field(() => MultipleQuestionsRelationFilter, { nullable: true })
  multipleQuestions?: MultipleQuestionsRelationFilter

  @Field(() => StringFilter, { nullable: true })
  multiple_question_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  answer?: StringFilter

  @Field(() => BoolFilter, { nullable: true })
  correct_flag?: BoolFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
