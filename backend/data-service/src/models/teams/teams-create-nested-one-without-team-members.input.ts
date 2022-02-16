import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamsCreateWithoutTeamMembersInput } from './teams-create-without-team-members.input'
import { TeamsCreateOrConnectWithoutTeamMembersInput } from './teams-create-or-connect-without-team-members.input'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'

@InputType()
export class TeamsCreateNestedOneWithoutTeamMembersInput {
  @Field(() => TeamsCreateWithoutTeamMembersInput, { nullable: true })
  create?: TeamsCreateWithoutTeamMembersInput

  @Field(() => TeamsCreateOrConnectWithoutTeamMembersInput, { nullable: true })
  connectOrCreate?: TeamsCreateOrConnectWithoutTeamMembersInput

  @Field(() => TeamsWhereUniqueInput, { nullable: true })
  connect?: TeamsWhereUniqueInput
}
