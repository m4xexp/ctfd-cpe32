import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class UserLoggingsCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  log_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  action?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  ip?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder
}
