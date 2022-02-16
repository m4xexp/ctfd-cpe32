import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ShortAnswerQuestionsMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  short_answer_question_id?: true

  @Field(() => Boolean, { nullable: true })
  challenge_id?: true

  @Field(() => Boolean, { nullable: true })
  question?: true

  @Field(() => Boolean, { nullable: true })
  hint?: true

  @Field(() => Boolean, { nullable: true })
  answer?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
