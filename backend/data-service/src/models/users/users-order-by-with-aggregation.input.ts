import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UsersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input'
import { UsersAvgOrderByAggregateInput } from './users-avg-order-by-aggregate.input'
import { UsersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input'
import { UsersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input'
import { UsersSumOrderByAggregateInput } from './users-sum-order-by-aggregate.input'

@InputType()
export class UsersOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  user_invite_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  profile_pic?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  total_score?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  conuntry_code?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  banned?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  verified?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  quick_start_status?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  profile_description?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  github_link?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  twitter_link?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  facebook_link?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => UsersCountOrderByAggregateInput, { nullable: true })
  _count?: UsersCountOrderByAggregateInput

  @Field(() => UsersAvgOrderByAggregateInput, { nullable: true })
  _avg?: UsersAvgOrderByAggregateInput

  @Field(() => UsersMaxOrderByAggregateInput, { nullable: true })
  _max?: UsersMaxOrderByAggregateInput

  @Field(() => UsersMinOrderByAggregateInput, { nullable: true })
  _min?: UsersMinOrderByAggregateInput

  @Field(() => UsersSumOrderByAggregateInput, { nullable: true })
  _sum?: UsersSumOrderByAggregateInput
}
