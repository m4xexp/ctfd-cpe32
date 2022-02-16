import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersCreateWithoutTeamsInput } from './team-members-create-without-teams.input'
import { TeamMembersCreateOrConnectWithoutTeamsInput } from './team-members-create-or-connect-without-teams.input'
import { TeamMembersUpsertWithWhereUniqueWithoutTeamsInput } from './team-members-upsert-with-where-unique-without-teams.input'
import { TeamMembersCreateManyTeamsInputEnvelope } from './team-members-create-many-teams-input-envelope.input'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'
import { TeamMembersUpdateWithWhereUniqueWithoutTeamsInput } from './team-members-update-with-where-unique-without-teams.input'
import { TeamMembersUpdateManyWithWhereWithoutTeamsInput } from './team-members-update-many-with-where-without-teams.input'
import { TeamMembersScalarWhereInput } from './team-members-scalar-where.input'

@InputType()
export class TeamMembersUncheckedUpdateManyWithoutTeamsInput {
  @Field(() => [TeamMembersCreateWithoutTeamsInput], { nullable: true })
  create?: Array<TeamMembersCreateWithoutTeamsInput>

  @Field(() => [TeamMembersCreateOrConnectWithoutTeamsInput], {
    nullable: true,
  })
  connectOrCreate?: Array<TeamMembersCreateOrConnectWithoutTeamsInput>

  @Field(() => [TeamMembersUpsertWithWhereUniqueWithoutTeamsInput], {
    nullable: true,
  })
  upsert?: Array<TeamMembersUpsertWithWhereUniqueWithoutTeamsInput>

  @Field(() => TeamMembersCreateManyTeamsInputEnvelope, { nullable: true })
  createMany?: TeamMembersCreateManyTeamsInputEnvelope

  @Field(() => [TeamMembersWhereUniqueInput], { nullable: true })
  set?: Array<TeamMembersWhereUniqueInput>

  @Field(() => [TeamMembersWhereUniqueInput], { nullable: true })
  disconnect?: Array<TeamMembersWhereUniqueInput>

  @Field(() => [TeamMembersWhereUniqueInput], { nullable: true })
  delete?: Array<TeamMembersWhereUniqueInput>

  @Field(() => [TeamMembersWhereUniqueInput], { nullable: true })
  connect?: Array<TeamMembersWhereUniqueInput>

  @Field(() => [TeamMembersUpdateWithWhereUniqueWithoutTeamsInput], {
    nullable: true,
  })
  update?: Array<TeamMembersUpdateWithWhereUniqueWithoutTeamsInput>

  @Field(() => [TeamMembersUpdateManyWithWhereWithoutTeamsInput], {
    nullable: true,
  })
  updateMany?: Array<TeamMembersUpdateManyWithWhereWithoutTeamsInput>

  @Field(() => [TeamMembersScalarWhereInput], { nullable: true })
  deleteMany?: Array<TeamMembersScalarWhereInput>
}
