import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input'

@InputType()
export class UserLoggingsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  log_id?: keyof typeof SortOrder

  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  users?: UsersOrderByWithRelationInput

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
