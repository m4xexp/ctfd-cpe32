import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserScoresUncheckedUpdateManyWithoutChallengesInput } from '../user-scores/user-scores-unchecked-update-many-without-challenges.input'
import { MultipleQuestionsUncheckedUpdateManyWithoutChallengesInput } from '../multiple-questions/multiple-questions-unchecked-update-many-without-challenges.input'
import { ShortAnswerQuestionsUncheckedUpdateManyWithoutChallengesInput } from '../short-answer-questions/short-answer-questions-unchecked-update-many-without-challenges.input'
import { FlagQuestionsUncheckedUpdateManyWithoutChallengesInput } from '../flag-questions/flag-questions-unchecked-update-many-without-challenges.input'

@InputType()
export class ChallengesUncheckedUpdateWithoutTypesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  challenge_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  question?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  level_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  categories_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  award_badge?: StringFieldUpdateOperationsInput

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  scorce?: IntFieldUpdateOperationsInput

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  max_time?: IntFieldUpdateOperationsInput

  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  max_cost?: IntFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserScoresUncheckedUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  userScores?: UserScoresUncheckedUpdateManyWithoutChallengesInput

  @Field(() => MultipleQuestionsUncheckedUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  multipleQuestions?: MultipleQuestionsUncheckedUpdateManyWithoutChallengesInput

  @Field(() => ShortAnswerQuestionsUncheckedUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  shortAnswerQuestions?: ShortAnswerQuestionsUncheckedUpdateManyWithoutChallengesInput

  @Field(() => FlagQuestionsUncheckedUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  flagQuestions?: FlagQuestionsUncheckedUpdateManyWithoutChallengesInput
}
