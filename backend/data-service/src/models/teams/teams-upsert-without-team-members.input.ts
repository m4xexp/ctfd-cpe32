import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamsUpdateWithoutTeamMembersInput } from './teams-update-without-team-members.input'
import { TeamsCreateWithoutTeamMembersInput } from './teams-create-without-team-members.input'

@InputType()
export class TeamsUpsertWithoutTeamMembersInput {
  @Field(() => TeamsUpdateWithoutTeamMembersInput, { nullable: false })
  update!: TeamsUpdateWithoutTeamMembersInput

  @Field(() => TeamsCreateWithoutTeamMembersInput, { nullable: false })
  create!: TeamsCreateWithoutTeamMembersInput
}
