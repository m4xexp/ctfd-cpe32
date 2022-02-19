import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersCreateWithoutUsersInput } from './team-members-create-without-users.input'
import { TeamMembersCreateOrConnectWithoutUsersInput } from './team-members-create-or-connect-without-users.input'
import { TeamMembersCreateManyUsersInputEnvelope } from './team-members-create-many-users-input-envelope.input'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'

@InputType()
export class TeamMembersUncheckedCreateNestedManyWithoutUsersInput {
  @Field(() => [TeamMembersCreateWithoutUsersInput], { nullable: true })
  create?: Array<TeamMembersCreateWithoutUsersInput>

  @Field(() => [TeamMembersCreateOrConnectWithoutUsersInput], {
    nullable: true,
  })
  connectOrCreate?: Array<TeamMembersCreateOrConnectWithoutUsersInput>

  @Field(() => TeamMembersCreateManyUsersInputEnvelope, { nullable: true })
  createMany?: TeamMembersCreateManyUsersInputEnvelope

  @Field(() => [TeamMembersWhereUniqueInput], { nullable: true })
  connect?: Array<TeamMembersWhereUniqueInput>
}
