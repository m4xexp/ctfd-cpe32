import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamMembersWhereInput } from './team-members-where.input'

@InputType()
export class TeamMembersListRelationFilter {
  @Field(() => TeamMembersWhereInput, { nullable: true })
  every?: TeamMembersWhereInput

  @Field(() => TeamMembersWhereInput, { nullable: true })
  some?: TeamMembersWhereInput

  @Field(() => TeamMembersWhereInput, { nullable: true })
  none?: TeamMembersWhereInput
}
