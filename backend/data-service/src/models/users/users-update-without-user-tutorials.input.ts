import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UserLoggingsUpdateManyWithoutUsersInput } from '../user-loggings/user-loggings-update-many-without-users.input'
import { UserBadgesUpdateManyWithoutUsersInput } from '../user-badges/user-badges-update-many-without-users.input'
import { TeamMembersUpdateManyWithoutUsersInput } from '../team-members/team-members-update-many-without-users.input'
import { UserScoresUpdateManyWithoutUsersInput } from '../user-scores/user-scores-update-many-without-users.input'

@InputType()
export class UsersUpdateWithoutUserTutorialsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  user_id?: StringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  profile_pic?: NullableStringFieldUpdateOperationsInput

  @Field(() => FloatFieldUpdateOperationsInput, { nullable: true })
  total_score?: FloatFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  conuntry_code?: StringFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  banned?: BoolFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  verified?: BoolFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  quick_start_status?: BoolFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  profile_description?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  github_link?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  twitter_link?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  facebook_link?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UserLoggingsUpdateManyWithoutUsersInput, { nullable: true })
  userLoggings?: UserLoggingsUpdateManyWithoutUsersInput

  @Field(() => UserBadgesUpdateManyWithoutUsersInput, { nullable: true })
  userBadges?: UserBadgesUpdateManyWithoutUsersInput

  @Field(() => TeamMembersUpdateManyWithoutUsersInput, { nullable: true })
  teamMembers?: TeamMembersUpdateManyWithoutUsersInput

  @Field(() => UserScoresUpdateManyWithoutUsersInput, { nullable: true })
  userScores?: UserScoresUpdateManyWithoutUsersInput
}
