import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersUpdateWithoutTeamMembersInput } from './users-update-without-team-members.input'
import { UsersCreateWithoutTeamMembersInput } from './users-create-without-team-members.input'

@InputType()
export class UsersUpsertWithoutTeamMembersInput {
  @Field(() => UsersUpdateWithoutTeamMembersInput, { nullable: false })
  update!: UsersUpdateWithoutTeamMembersInput

  @Field(() => UsersCreateWithoutTeamMembersInput, { nullable: false })
  create!: UsersCreateWithoutTeamMembersInput
}
