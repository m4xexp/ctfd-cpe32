import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UsersUpdateOneRequiredWithoutTeamMembersInput } from '../users/users-update-one-required-without-team-members.input'
import { TeamsUpdateOneRequiredWithoutTeamMembersInput } from '../teams/teams-update-one-required-without-team-members.input'

@InputType()
export class TeamMembersUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: StringFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  status?: BoolFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UsersUpdateOneRequiredWithoutTeamMembersInput, {
    nullable: true,
  })
  users?: UsersUpdateOneRequiredWithoutTeamMembersInput

  @Field(() => TeamsUpdateOneRequiredWithoutTeamMembersInput, {
    nullable: true,
  })
  teams?: TeamsUpdateOneRequiredWithoutTeamMembersInput
}
