import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput } from './multiple-choice-question-create-without-multiple-questions.input'
import { MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput } from './multiple-choice-question-create-or-connect-without-multiple-questions.input'
import { MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope } from './multiple-choice-question-create-many-multiple-questions-input-envelope.input'
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input'

@InputType()
export class MultipleChoiceQuestionCreateNestedManyWithoutMultipleQuestionsInput {
  @Field(() => [MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput], {
    nullable: true,
  })
  create?: Array<MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput>

  @Field(
    () => [MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput],
    { nullable: true },
  )
  connectOrCreate?: Array<MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput>

  @Field(() => MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope, {
    nullable: true,
  })
  createMany?: MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope

  @Field(() => [MultipleChoiceQuestionWhereUniqueInput], { nullable: true })
  connect?: Array<MultipleChoiceQuestionWhereUniqueInput>
}
