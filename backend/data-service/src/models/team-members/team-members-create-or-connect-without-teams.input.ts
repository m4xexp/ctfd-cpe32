import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'
import { TeamMembersCreateWithoutTeamsInput } from './team-members-create-without-teams.input'

@InputType()
export class TeamMembersCreateOrConnectWithoutTeamsInput {
  @Field(() => TeamMembersWhereUniqueInput, { nullable: false })
  where!: TeamMembersWhereUniqueInput

  @Field(() => TeamMembersCreateWithoutTeamsInput, { nullable: false })
  create!: TeamMembersCreateWithoutTeamsInput
}
