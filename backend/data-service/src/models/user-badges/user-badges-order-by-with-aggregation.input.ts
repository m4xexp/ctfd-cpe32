import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UserBadgesCountOrderByAggregateInput } from './user-badges-count-order-by-aggregate.input'
import { UserBadgesMaxOrderByAggregateInput } from './user-badges-max-order-by-aggregate.input'
import { UserBadgesMinOrderByAggregateInput } from './user-badges-min-order-by-aggregate.input'

@InputType()
export class UserBadgesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  badge_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => UserBadgesCountOrderByAggregateInput, { nullable: true })
  _count?: UserBadgesCountOrderByAggregateInput

  @Field(() => UserBadgesMaxOrderByAggregateInput, { nullable: true })
  _max?: UserBadgesMaxOrderByAggregateInput

  @Field(() => UserBadgesMinOrderByAggregateInput, { nullable: true })
  _min?: UserBadgesMinOrderByAggregateInput
}
