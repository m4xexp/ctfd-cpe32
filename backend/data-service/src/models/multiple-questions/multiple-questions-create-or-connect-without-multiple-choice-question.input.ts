import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput } from './multiple-questions-create-without-multiple-choice-question.input'

@InputType()
export class MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput {
  @Field(() => MultipleQuestionsWhereUniqueInput, { nullable: false })
  where!: MultipleQuestionsWhereUniqueInput

  @Field(() => MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput, {
    nullable: false,
  })
  create!: MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput
}
