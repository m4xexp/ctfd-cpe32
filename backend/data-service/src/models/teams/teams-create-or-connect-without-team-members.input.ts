import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'
import { TeamsCreateWithoutTeamMembersInput } from './teams-create-without-team-members.input'

@InputType()
export class TeamsCreateOrConnectWithoutTeamMembersInput {
  @Field(() => TeamsWhereUniqueInput, { nullable: false })
  where!: TeamsWhereUniqueInput

  @Field(() => TeamsCreateWithoutTeamMembersInput, { nullable: false })
  create!: TeamsCreateWithoutTeamMembersInput
}
