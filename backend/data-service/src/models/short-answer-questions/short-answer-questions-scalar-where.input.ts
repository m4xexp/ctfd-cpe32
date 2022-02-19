import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class ShortAnswerQuestionsScalarWhereInput {
  @Field(() => [ShortAnswerQuestionsScalarWhereInput], { nullable: true })
  AND?: Array<ShortAnswerQuestionsScalarWhereInput>

  @Field(() => [ShortAnswerQuestionsScalarWhereInput], { nullable: true })
  OR?: Array<ShortAnswerQuestionsScalarWhereInput>

  @Field(() => [ShortAnswerQuestionsScalarWhereInput], { nullable: true })
  NOT?: Array<ShortAnswerQuestionsScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  short_answer_question_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  challenge_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  question?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  hint?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  answer?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
