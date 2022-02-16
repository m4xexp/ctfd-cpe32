import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { ChallengesRelationFilter } from '../challenges/challenges-relation-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class FlagQuestionsWhereInput {
  @Field(() => [FlagQuestionsWhereInput], { nullable: true })
  AND?: Array<FlagQuestionsWhereInput>

  @Field(() => [FlagQuestionsWhereInput], { nullable: true })
  OR?: Array<FlagQuestionsWhereInput>

  @Field(() => [FlagQuestionsWhereInput], { nullable: true })
  NOT?: Array<FlagQuestionsWhereInput>

  @Field(() => StringFilter, { nullable: true })
  flag_question_id?: StringFilter

  @Field(() => ChallengesRelationFilter, { nullable: true })
  challenges?: ChallengesRelationFilter

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
