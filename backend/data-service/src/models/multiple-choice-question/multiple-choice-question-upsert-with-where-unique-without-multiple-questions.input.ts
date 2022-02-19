import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input'
import { MultipleChoiceQuestionUpdateWithoutMultipleQuestionsInput } from './multiple-choice-question-update-without-multiple-questions.input'
import { MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput } from './multiple-choice-question-create-without-multiple-questions.input'

@InputType()
export class MultipleChoiceQuestionUpsertWithWhereUniqueWithoutMultipleQuestionsInput {
  @Field(() => MultipleChoiceQuestionWhereUniqueInput, { nullable: false })
  where!: MultipleChoiceQuestionWhereUniqueInput

  @Field(() => MultipleChoiceQuestionUpdateWithoutMultipleQuestionsInput, {
    nullable: false,
  })
  update!: MultipleChoiceQuestionUpdateWithoutMultipleQuestionsInput

  @Field(() => MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput, {
    nullable: false,
  })
  create!: MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput
}
