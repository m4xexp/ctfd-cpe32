import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamMembersWhereInput } from './team-members-where.input'

@ArgsType()
export class DeleteManyTeamMembersArgs {
  @Field(() => TeamMembersWhereInput, { nullable: true })
  where?: TeamMembersWhereInput
}
