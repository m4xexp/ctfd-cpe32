import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class MultipleQuestionsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  multiple_question_id?: string
}
