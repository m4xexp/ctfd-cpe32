import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamMembersUpdateManyMutationInput } from './team-members-update-many-mutation.input'
import { TeamMembersWhereInput } from './team-members-where.input'

@ArgsType()
export class UpdateManyTeamMembersArgs {
  @Field(() => TeamMembersUpdateManyMutationInput, { nullable: false })
  data!: TeamMembersUpdateManyMutationInput

  @Field(() => TeamMembersWhereInput, { nullable: true })
  where?: TeamMembersWhereInput
}
