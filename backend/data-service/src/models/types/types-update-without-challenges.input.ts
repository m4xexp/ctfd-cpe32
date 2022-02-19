import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserScoresUpdateManyWithoutTypesInput } from '../user-scores/user-scores-update-many-without-types.input'

@InputType()
export class TypesUpdateWithoutChallengesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  types_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserScoresUpdateManyWithoutTypesInput, { nullable: true })
  userScores?: UserScoresUpdateManyWithoutTypesInput
}
