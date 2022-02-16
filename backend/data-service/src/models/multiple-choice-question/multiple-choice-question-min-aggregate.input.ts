import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class MultipleChoiceQuestionMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  multiple_choice_question_id?: true

  @Field(() => Boolean, { nullable: true })
  multiple_question_id?: true

  @Field(() => Boolean, { nullable: true })
  answer?: true

  @Field(() => Boolean, { nullable: true })
  correct_flag?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
