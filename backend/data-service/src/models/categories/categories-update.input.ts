import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserScoresUpdateManyWithoutCategoriesInput } from '../user-scores/user-scores-update-many-without-categories.input'
import { ChallengesUpdateManyWithoutCategoriesInput } from '../challenges/challenges-update-many-without-categories.input'

@InputType()
export class CategoriesUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  categories_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserScoresUpdateManyWithoutCategoriesInput, { nullable: true })
  userScores?: UserScoresUpdateManyWithoutCategoriesInput

  @Field(() => ChallengesUpdateManyWithoutCategoriesInput, { nullable: true })
  challenges?: ChallengesUpdateManyWithoutCategoriesInput
}
