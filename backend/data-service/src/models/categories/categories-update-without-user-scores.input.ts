import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { ChallengesUpdateManyWithoutCategoriesInput } from '../challenges/challenges-update-many-without-categories.input'

@InputType()
export class CategoriesUpdateWithoutUserScoresInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  categories_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => ChallengesUpdateManyWithoutCategoriesInput, { nullable: true })
  challenges?: ChallengesUpdateManyWithoutCategoriesInput
}
