import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserBadgesUpdateManyWithoutBadgesInput } from '../user-badges/user-badges-update-many-without-badges.input'
import { EventsUpdateManyWithoutBadgesInput } from '../events/events-update-many-without-badges.input'
import { ChallengesUpdateManyWithoutBadgesInput } from '../challenges/challenges-update-many-without-badges.input'

@InputType()
export class BadgesUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  badge_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  condition?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  link?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  status?: BoolFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserBadgesUpdateManyWithoutBadgesInput, { nullable: true })
  userBadges?: UserBadgesUpdateManyWithoutBadgesInput

  @Field(() => EventsUpdateManyWithoutBadgesInput, { nullable: true })
  events?: EventsUpdateManyWithoutBadgesInput

  @Field(() => ChallengesUpdateManyWithoutBadgesInput, { nullable: true })
  challenges?: ChallengesUpdateManyWithoutBadgesInput
}
