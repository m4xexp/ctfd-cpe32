import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input'
import { SortOrder } from '../prisma/sort-order.enum'
import { TeamsOrderByWithRelationInput } from '../teams/teams-order-by-with-relation.input'

@InputType()
export class TeamMembersOrderByWithRelationInput {
  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  users?: UsersOrderByWithRelationInput

  @Field(() => SortOrder, { nullable: true })
  user_id?: keyof typeof SortOrder

  @Field(() => TeamsOrderByWithRelationInput, { nullable: true })
  teams?: TeamsOrderByWithRelationInput

  @Field(() => SortOrder, { nullable: true })
  team_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder
}
