import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TypesCountOrderByAggregateInput } from './types-count-order-by-aggregate.input'
import { TypesMaxOrderByAggregateInput } from './types-max-order-by-aggregate.input'
import { TypesMinOrderByAggregateInput } from './types-min-order-by-aggregate.input'

@InputType()
export class TypesOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  types_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => TypesCountOrderByAggregateInput, { nullable: true })
  _count?: TypesCountOrderByAggregateInput

  @Field(() => TypesMaxOrderByAggregateInput, { nullable: true })
  _max?: TypesMaxOrderByAggregateInput

  @Field(() => TypesMinOrderByAggregateInput, { nullable: true })
  _min?: TypesMinOrderByAggregateInput
}
