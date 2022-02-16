import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleChoiceQuestionWhereInput } from './multiple-choice-question-where.input'

@InputType()
export class MultipleChoiceQuestionListRelationFilter {
  @Field(() => MultipleChoiceQuestionWhereInput, { nullable: true })
  every?: MultipleChoiceQuestionWhereInput

  @Field(() => MultipleChoiceQuestionWhereInput, { nullable: true })
  some?: MultipleChoiceQuestionWhereInput

  @Field(() => MultipleChoiceQuestionWhereInput, { nullable: true })
  none?: MultipleChoiceQuestionWhereInput
}
