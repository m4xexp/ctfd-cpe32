import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'
import { TeamMembersUpdateWithoutUsersInput } from './team-members-update-without-users.input'

@InputType()
export class TeamMembersUpdateWithWhereUniqueWithoutUsersInput {
  @Field(() => TeamMembersWhereUniqueInput, { nullable: false })
  where!: TeamMembersWhereUniqueInput

  @Field(() => TeamMembersUpdateWithoutUsersInput, { nullable: false })
  data!: TeamMembersUpdateWithoutUsersInput
}
