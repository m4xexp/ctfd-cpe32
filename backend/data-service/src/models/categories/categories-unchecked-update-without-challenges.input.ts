import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserScoresUncheckedUpdateManyWithoutCategoriesInput } from '../user-scores/user-scores-unchecked-update-many-without-categories.input'

@InputType()
export class CategoriesUncheckedUpdateWithoutChallengesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  categories_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserScoresUncheckedUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  userScores?: UserScoresUncheckedUpdateManyWithoutCategoriesInput
}
