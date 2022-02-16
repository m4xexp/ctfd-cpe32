import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class EventsCountOrderByAggregateInput {
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
}
