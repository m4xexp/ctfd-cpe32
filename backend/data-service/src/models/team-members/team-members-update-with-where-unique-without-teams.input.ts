import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'
import { TeamMembersUpdateWithoutTeamsInput } from './team-members-update-without-teams.input'

@InputType()
export class TeamMembersUpdateWithWhereUniqueWithoutTeamsInput {
  @Field(() => TeamMembersWhereUniqueInput, { nullable: false })
  where!: TeamMembersWhereUniqueInput

  @Field(() => TeamMembersUpdateWithoutTeamsInput, { nullable: false })
  data!: TeamMembersUpdateWithoutTeamsInput
}
