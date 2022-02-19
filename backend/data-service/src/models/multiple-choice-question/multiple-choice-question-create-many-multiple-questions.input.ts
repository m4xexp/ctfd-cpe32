import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class MultipleChoiceQuestionCreateManyMultipleQuestionsInput {
  @Field(() => String, { nullable: true })
  multiple_choice_question_id?: string

  @Field(() => String, { nullable: true })
  answer?: string

  @Field(() => Boolean, { nullable: true })
  correct_flag?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
