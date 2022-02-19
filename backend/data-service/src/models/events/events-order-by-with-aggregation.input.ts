import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { EventsCountOrderByAggregateInput } from './events-count-order-by-aggregate.input'
import { EventsMaxOrderByAggregateInput } from './events-max-order-by-aggregate.input'
import { EventsMinOrderByAggregateInput } from './events-min-order-by-aggregate.input'

@InputType()
export class EventsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  event_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  evnet_description?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  award_badge?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  flag_link?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  question?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  answer?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => EventsCountOrderByAggregateInput, { nullable: true })
  _count?: EventsCountOrderByAggregateInput

  @Field(() => EventsMaxOrderByAggregateInput, { nullable: true })
  _max?: EventsMaxOrderByAggregateInput

  @Field(() => EventsMinOrderByAggregateInput, { nullable: true })
  _min?: EventsMinOrderByAggregateInput
}
