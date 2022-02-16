import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput } from './multiple-questions-create-without-multiple-choice-question.input'
import { MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput } from './multiple-questions-create-or-connect-without-multiple-choice-question.input'
import { MultipleQuestionsUpsertWithoutMultipleChoiceQuestionInput } from './multiple-questions-upsert-without-multiple-choice-question.input'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { MultipleQuestionsUpdateWithoutMultipleChoiceQuestionInput } from './multiple-questions-update-without-multiple-choice-question.input'

@InputType()
export class MultipleQuestionsUpdateOneRequiredWithoutMultipleChoiceQuestionInput {
  @Field(() => MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput, {
    nullable: true,
  })
  create?: MultipleQuestionsCreateWithoutMultipleChoiceQuestionInput

  @Field(
    () => MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput,
    { nullable: true },
  )
  connectOrCreate?: MultipleQuestionsCreateOrConnectWithoutMultipleChoiceQuestionInput

  @Field(() => MultipleQuestionsUpsertWithoutMultipleChoiceQuestionInput, {
    nullable: true,
  })
  upsert?: MultipleQuestionsUpsertWithoutMultipleChoiceQuestionInput

  @Field(() => MultipleQuestionsWhereUniqueInput, { nullable: true })
  connect?: MultipleQuestionsWhereUniqueInput

  @Field(() => MultipleQuestionsUpdateWithoutMultipleChoiceQuestionInput, {
    nullable: true,
  })
  update?: MultipleQuestionsUpdateWithoutMultipleChoiceQuestionInput
}
