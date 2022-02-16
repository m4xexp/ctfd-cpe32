import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UserScoresCountOrderByAggregateInput } from './user-scores-count-order-by-aggregate.input'
import { UserScoresAvgOrderByAggregateInput } from './user-scores-avg-order-by-aggregate.input'
import { UserScoresMaxOrderByAggregateInput } from './user-scores-max-order-by-aggregate.input'
import { UserScoresMinOrderByAggregateInput } from './user-scores-min-order-by-aggregate.input'
import { UserScoresSumOrderByAggregateInput } from './user-scores-sum-order-by-aggregate.input'

@InputType()
export class UserScoresOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  challenge_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  base_score?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  time_score?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  level_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  types_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  categories_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => UserScoresCountOrderByAggregateInput, { nullable: true })
  _count?: UserScoresCountOrderByAggregateInput

  @Field(() => UserScoresAvgOrderByAggregateInput, { nullable: true })
  _avg?: UserScoresAvgOrderByAggregateInput

  @Field(() => UserScoresMaxOrderByAggregateInput, { nullable: true })
  _max?: UserScoresMaxOrderByAggregateInput

  @Field(() => UserScoresMinOrderByAggregateInput, { nullable: true })
  _min?: UserScoresMinOrderByAggregateInput

  @Field(() => UserScoresSumOrderByAggregateInput, { nullable: true })
  _sum?: UserScoresSumOrderByAggregateInput
}
