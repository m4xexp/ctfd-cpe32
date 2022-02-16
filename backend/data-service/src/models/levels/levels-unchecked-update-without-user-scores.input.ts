import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { ChallengesUncheckedUpdateManyWithoutLevelsInput } from '../challenges/challenges-unchecked-update-many-without-levels.input'

@InputType()
export class LevelsUncheckedUpdateWithoutUserScoresInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  level_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => ChallengesUncheckedUpdateManyWithoutLevelsInput, {
    nullable: true,
  })
  challenges?: ChallengesUncheckedUpdateManyWithoutLevelsInput
}
