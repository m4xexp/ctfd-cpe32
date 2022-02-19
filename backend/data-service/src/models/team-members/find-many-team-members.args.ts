import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamMembersWhereInput } from './team-members-where.input'
import { TeamMembersOrderByWithRelationInput } from './team-members-order-by-with-relation.input'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TeamMembersScalarFieldEnum } from './team-members-scalar-field.enum'

@ArgsType()
export class FindManyTeamMembersArgs {
  @Field(() => TeamMembersWhereInput, { nullable: true })
  where?: TeamMembersWhereInput

  @Field(() => [TeamMembersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TeamMembersOrderByWithRelationInput>

  @Field(() => TeamMembersWhereUniqueInput, { nullable: true })
  cursor?: TeamMembersWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [TeamMembersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TeamMembersScalarFieldEnum>
}
