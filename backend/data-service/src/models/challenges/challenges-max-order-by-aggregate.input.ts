import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class ChallengesMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  challenge_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  question?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  level_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  types_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  categories_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  award_badge?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  scorce?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  max_time?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  max_cost?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder
}
