import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class FlagQuestionsScalarWhereInput {
  @Field(() => [FlagQuestionsScalarWhereInput], { nullable: true })
  AND?: Array<FlagQuestionsScalarWhereInput>

  @Field(() => [FlagQuestionsScalarWhereInput], { nullable: true })
  OR?: Array<FlagQuestionsScalarWhereInput>

  @Field(() => [FlagQuestionsScalarWhereInput], { nullable: true })
  NOT?: Array<FlagQuestionsScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  flag_question_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  challenge_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  video_link?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  question?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  answer?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
