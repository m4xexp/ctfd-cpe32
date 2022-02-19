import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TeamMembersCountOrderByAggregateInput } from './team-members-count-order-by-aggregate.input'
import { TeamMembersMaxOrderByAggregateInput } from './team-members-max-order-by-aggregate.input'
import { TeamMembersMinOrderByAggregateInput } from './team-members-min-order-by-aggregate.input'

@InputType()
export class TeamMembersOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  team_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => TeamMembersCountOrderByAggregateInput, { nullable: true })
  _count?: TeamMembersCountOrderByAggregateInput

  @Field(() => TeamMembersMaxOrderByAggregateInput, { nullable: true })
  _max?: TeamMembersMaxOrderByAggregateInput

  @Field(() => TeamMembersMinOrderByAggregateInput, { nullable: true })
  _min?: TeamMembersMinOrderByAggregateInput
}
