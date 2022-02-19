import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UsersUpdateOneRequiredWithoutUserBadgesInput } from '../users/users-update-one-required-without-user-badges.input'
import { BadgesUpdateOneRequiredWithoutUserBadgesInput } from '../badges/badges-update-one-required-without-user-badges.input'

@InputType()
export class UserBadgesUpdateInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UsersUpdateOneRequiredWithoutUserBadgesInput, { nullable: true })
  users?: UsersUpdateOneRequiredWithoutUserBadgesInput

  @Field(() => BadgesUpdateOneRequiredWithoutUserBadgesInput, {
    nullable: true,
  })
  badges?: BadgesUpdateOneRequiredWithoutUserBadgesInput
}
