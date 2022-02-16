import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { ChallengesUpdateOneRequiredWithoutShortAnswerQuestionsInput } from '../challenges/challenges-update-one-required-without-short-answer-questions.input'

@InputType()
export class ShortAnswerQuestionsUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  short_answer_question_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  question?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  hint?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  answer?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => ChallengesUpdateOneRequiredWithoutShortAnswerQuestionsInput, {
    nullable: true,
  })
  challenges?: ChallengesUpdateOneRequiredWithoutShortAnswerQuestionsInput
}
