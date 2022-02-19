import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class ChallengesSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  scorce?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  max_time?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  max_cost?: keyof typeof SortOrder
}
