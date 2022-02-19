import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersCreateWithoutTeamsInput } from './team-members-create-without-teams.input'
import { TeamMembersCreateOrConnectWithoutTeamsInput } from './team-members-create-or-connect-without-teams.input'
import { TeamMembersCreateManyTeamsInputEnvelope } from './team-members-create-many-teams-input-envelope.input'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'

@InputType()
export class TeamMembersUncheckedCreateNestedManyWithoutTeamsInput {
  @Field(() => [TeamMembersCreateWithoutTeamsInput], { nullable: true })
  create?: Array<TeamMembersCreateWithoutTeamsInput>

  @Field(() => [TeamMembersCreateOrConnectWithoutTeamsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<TeamMembersCreateOrConnectWithoutTeamsInput>

  @Field(() => TeamMembersCreateManyTeamsInputEnvelope, { nullable: true })
  createMany?: TeamMembersCreateManyTeamsInputEnvelope

  @Field(() => [TeamMembersWhereUniqueInput], { nullable: true })
  connect?: Array<TeamMembersWhereUniqueInput>
}
