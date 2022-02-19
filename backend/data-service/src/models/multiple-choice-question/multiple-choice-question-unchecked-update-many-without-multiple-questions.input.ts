import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput } from './multiple-choice-question-create-without-multiple-questions.input'
import { MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput } from './multiple-choice-question-create-or-connect-without-multiple-questions.input'
import { MultipleChoiceQuestionUpsertWithWhereUniqueWithoutMultipleQuestionsInput } from './multiple-choice-question-upsert-with-where-unique-without-multiple-questions.input'
import { MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope } from './multiple-choice-question-create-many-multiple-questions-input-envelope.input'
import { MultipleChoiceQuestionWhereUniqueInput } from './multiple-choice-question-where-unique.input'
import { MultipleChoiceQuestionUpdateWithWhereUniqueWithoutMultipleQuestionsInput } from './multiple-choice-question-update-with-where-unique-without-multiple-questions.input'
import { MultipleChoiceQuestionUpdateManyWithWhereWithoutMultipleQuestionsInput } from './multiple-choice-question-update-many-with-where-without-multiple-questions.input'
import { MultipleChoiceQuestionScalarWhereInput } from './multiple-choice-question-scalar-where.input'

@InputType()
export class MultipleChoiceQuestionUncheckedUpdateManyWithoutMultipleQuestionsInput {
  @Field(() => [MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput], {
    nullable: true,
  })
  create?: Array<MultipleChoiceQuestionCreateWithoutMultipleQuestionsInput>

  @Field(
    () => [MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput],
    { nullable: true },
  )
  connectOrCreate?: Array<MultipleChoiceQuestionCreateOrConnectWithoutMultipleQuestionsInput>

  @Field(
    () => [
      MultipleChoiceQuestionUpsertWithWhereUniqueWithoutMultipleQuestionsInput,
    ],
    { nullable: true },
  )
  upsert?: Array<MultipleChoiceQuestionUpsertWithWhereUniqueWithoutMultipleQuestionsInput>

  @Field(() => MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope, {
    nullable: true,
  })
  createMany?: MultipleChoiceQuestionCreateManyMultipleQuestionsInputEnvelope

  @Field(() => [MultipleChoiceQuestionWhereUniqueInput], { nullable: true })
  set?: Array<MultipleChoiceQuestionWhereUniqueInput>

  @Field(() => [MultipleChoiceQuestionWhereUniqueInput], { nullable: true })
  disconnect?: Array<MultipleChoiceQuestionWhereUniqueInput>

  @Field(() => [MultipleChoiceQuestionWhereUniqueInput], { nullable: true })
  delete?: Array<MultipleChoiceQuestionWhereUniqueInput>

  @Field(() => [MultipleChoiceQuestionWhereUniqueInput], { nullable: true })
  connect?: Array<MultipleChoiceQuestionWhereUniqueInput>

  @Field(
    () => [
      MultipleChoiceQuestionUpdateWithWhereUniqueWithoutMultipleQuestionsInput,
    ],
    { nullable: true },
  )
  update?: Array<MultipleChoiceQuestionUpdateWithWhereUniqueWithoutMultipleQuestionsInput>

  @Field(
    () => [
      MultipleChoiceQuestionUpdateManyWithWhereWithoutMultipleQuestionsInput,
    ],
    { nullable: true },
  )
  updateMany?: Array<MultipleChoiceQuestionUpdateManyWithWhereWithoutMultipleQuestionsInput>

  @Field(() => [MultipleChoiceQuestionScalarWhereInput], { nullable: true })
  deleteMany?: Array<MultipleChoiceQuestionScalarWhereInput>
}
