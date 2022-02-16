import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UserTutorialsCountOrderByAggregateInput } from './user-tutorials-count-order-by-aggregate.input'
import { UserTutorialsMaxOrderByAggregateInput } from './user-tutorials-max-order-by-aggregate.input'
import { UserTutorialsMinOrderByAggregateInput } from './user-tutorials-min-order-by-aggregate.input'

@InputType()
export class UserTutorialsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  chapter_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => UserTutorialsCountOrderByAggregateInput, { nullable: true })
  _count?: UserTutorialsCountOrderByAggregateInput

  @Field(() => UserTutorialsMaxOrderByAggregateInput, { nullable: true })
  _max?: UserTutorialsMaxOrderByAggregateInput

  @Field(() => UserTutorialsMinOrderByAggregateInput, { nullable: true })
  _min?: UserTutorialsMinOrderByAggregateInput
}
