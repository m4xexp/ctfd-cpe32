import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { BadgesUpdateOneRequiredWithoutUserBadgesInput } from '../badges/badges-update-one-required-without-user-badges.input'

@InputType()
export class UserBadgesUpdateWithoutUsersInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => BadgesUpdateOneRequiredWithoutUserBadgesInput, {
    nullable: true,
  })
  badges?: BadgesUpdateOneRequiredWithoutUserBadgesInput
}
