import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleChoiceQuestionUncheckedCreateNestedManyWithoutMultipleQuestionsInput } from '../multiple-choice-question/multiple-choice-question-unchecked-create-nested-many-without-multiple-questions.input'

@InputType()
export class MultipleQuestionsUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  multiple_question_id?: string

  @Field(() => String, { nullable: false })
  challenge_id!: string

  @Field(() => String, { nullable: true })
  question?: string

  @Field(() => String, { nullable: true })
  hint?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(
    () =>
      MultipleChoiceQuestionUncheckedCreateNestedManyWithoutMultipleQuestionsInput,
    { nullable: true },
  )
  multipleChoiceQuestion?: MultipleChoiceQuestionUncheckedCreateNestedManyWithoutMultipleQuestionsInput
}
