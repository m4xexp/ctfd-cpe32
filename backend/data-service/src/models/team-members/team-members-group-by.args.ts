import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamMembersWhereInput } from './team-members-where.input'
import { TeamMembersOrderByWithAggregationInput } from './team-members-order-by-with-aggregation.input'
import { TeamMembersScalarFieldEnum } from './team-members-scalar-field.enum'
import { TeamMembersScalarWhereWithAggregatesInput } from './team-members-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { TeamMembersCountAggregateInput } from './team-members-count-aggregate.input'
import { TeamMembersMinAggregateInput } from './team-members-min-aggregate.input'
import { TeamMembersMaxAggregateInput } from './team-members-max-aggregate.input'

@ArgsType()
export class TeamMembersGroupByArgs {
  @Field(() => TeamMembersWhereInput, { nullable: true })
  where?: TeamMembersWhereInput

  @Field(() => [TeamMembersOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TeamMembersOrderByWithAggregationInput>

  @Field(() => [TeamMembersScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TeamMembersScalarFieldEnum>

  @Field(() => TeamMembersScalarWhereWithAggregatesInput, { nullable: true })
  having?: TeamMembersScalarWhereWithAggregatesInput

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
