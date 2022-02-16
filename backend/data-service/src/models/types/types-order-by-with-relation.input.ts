import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UserScoresOrderByRelationAggregateInput } from '../user-scores/user-scores-order-by-relation-aggregate.input'
import { ChallengesOrderByRelationAggregateInput } from '../challenges/challenges-order-by-relation-aggregate.input'

@InputType()
export class TypesOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  types_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => UserScoresOrderByRelationAggregateInput, { nullable: true })
  userScores?: UserScoresOrderByRelationAggregateInput

  @Field(() => ChallengesOrderByRelationAggregateInput, { nullable: true })
  challenges?: ChallengesOrderByRelationAggregateInput
}
