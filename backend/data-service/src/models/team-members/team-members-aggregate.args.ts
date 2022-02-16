import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamMembersWhereInput } from './team-members-where.input'
import { TeamMembersOrderByWithRelationInput } from './team-members-order-by-with-relation.input'
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TeamMembersCountAggregateInput } from './team-members-count-aggregate.input'
import { TeamMembersMinAggregateInput } from './team-members-min-aggregate.input'
import { TeamMembersMaxAggregateInput } from './team-members-max-aggregate.input'

@ArgsType()
export class TeamMembersAggregateArgs {
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

  @Field(() => TeamMembersCountAggregateInput, { nullable: true })
  _count?: TeamMembersCountAggregateInput

  @Field(() => TeamMembersMinAggregateInput, { nullable: true })
  _min?: TeamMembersMinAggregateInput

  @Field(() => TeamMembersMaxAggregateInput, { nullable: true })
  _max?: TeamMembersMaxAggregateInput
}
