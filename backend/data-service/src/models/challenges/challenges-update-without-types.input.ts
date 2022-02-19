import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { LevelsUpdateOneRequiredWithoutChallengesInput } from '../levels/levels-update-one-required-without-challenges.input'
import { CategoriesUpdateOneRequiredWithoutChallengesInput } from '../categories/categories-update-one-required-without-challenges.input'
import { BadgesUpdateOneRequiredWithoutChallengesInput } from '../badges/badges-update-one-required-without-challenges.input'
import { UserScoresUpdateManyWithoutChallengesInput } from '../user-scores/user-scores-update-many-without-challenges.input'
import { MultipleQuestionsUpdateManyWithoutChallengesInput } from '../multiple-questions/multiple-questions-update-many-without-challenges.input'
import { ShortAnswerQuestionsUpdateManyWithoutChallengesInput } from '../short-answer-questions/short-answer-questions-update-many-without-challenges.input'
import { FlagQuestionsUpdateManyWithoutChallengesInput } from '../flag-questions/flag-questions-update-many-without-challenges.input'

@InputType()
export class ChallengesUpdateWithoutTypesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  challenge_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  question?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput

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

  @Field(() => LevelsUpdateOneRequiredWithoutChallengesInput, {
    nullable: true,
  })
  levels?: LevelsUpdateOneRequiredWithoutChallengesInput

  @Field(() => CategoriesUpdateOneRequiredWithoutChallengesInput, {
    nullable: true,
  })
  categories?: CategoriesUpdateOneRequiredWithoutChallengesInput

  @Field(() => BadgesUpdateOneRequiredWithoutChallengesInput, {
    nullable: true,
  })
  badges?: BadgesUpdateOneRequiredWithoutChallengesInput

  @Field(() => UserScoresUpdateManyWithoutChallengesInput, { nullable: true })
  userScores?: UserScoresUpdateManyWithoutChallengesInput

  @Field(() => MultipleQuestionsUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  multipleQuestions?: MultipleQuestionsUpdateManyWithoutChallengesInput

  @Field(() => ShortAnswerQuestionsUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  shortAnswerQuestions?: ShortAnswerQuestionsUpdateManyWithoutChallengesInput

  @Field(() => FlagQuestionsUpdateManyWithoutChallengesInput, {
    nullable: true,
  })
  flagQuestions?: FlagQuestionsUpdateManyWithoutChallengesInput
}
