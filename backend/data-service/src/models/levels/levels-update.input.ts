import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserScoresUpdateManyWithoutLevelsInput } from '../user-scores/user-scores-update-many-without-levels.input'
import { ChallengesUpdateManyWithoutLevelsInput } from '../challenges/challenges-update-many-without-levels.input'

@InputType()
export class LevelsUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  level_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserScoresUpdateManyWithoutLevelsInput, { nullable: true })
  userScores?: UserScoresUpdateManyWithoutLevelsInput

  @Field(() => ChallengesUpdateManyWithoutLevelsInput, { nullable: true })
  challenges?: ChallengesUpdateManyWithoutLevelsInput
}
