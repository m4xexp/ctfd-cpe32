import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class UserScoresMinOrderByAggregateInput {
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
}
