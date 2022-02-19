import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { ChallengesUpdateOneRequiredWithoutMultipleQuestionsInput } from '../challenges/challenges-update-one-required-without-multiple-questions.input'
import { MultipleChoiceQuestionUpdateManyWithoutMultipleQuestionsInput } from '../multiple-choice-question/multiple-choice-question-update-many-without-multiple-questions.input'

@InputType()
export class MultipleQuestionsUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  multiple_question_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  question?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  hint?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => ChallengesUpdateOneRequiredWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  challenges?: ChallengesUpdateOneRequiredWithoutMultipleQuestionsInput

  @Field(() => MultipleChoiceQuestionUpdateManyWithoutMultipleQuestionsInput, {
    nullable: true,
  })
  multipleChoiceQuestion?: MultipleChoiceQuestionUpdateManyWithoutMultipleQuestionsInput
}
