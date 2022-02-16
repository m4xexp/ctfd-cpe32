import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { FlagQuestionsCountOrderByAggregateInput } from './flag-questions-count-order-by-aggregate.input'
import { FlagQuestionsMaxOrderByAggregateInput } from './flag-questions-max-order-by-aggregate.input'
import { FlagQuestionsMinOrderByAggregateInput } from './flag-questions-min-order-by-aggregate.input'

@InputType()
export class FlagQuestionsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  flag_question_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  challenge_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  video_link?: keyof typeof SortOrder

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

  @Field(() => FlagQuestionsCountOrderByAggregateInput, { nullable: true })
  _count?: FlagQuestionsCountOrderByAggregateInput

  @Field(() => FlagQuestionsMaxOrderByAggregateInput, { nullable: true })
  _max?: FlagQuestionsMaxOrderByAggregateInput

  @Field(() => FlagQuestionsMinOrderByAggregateInput, { nullable: true })
  _min?: FlagQuestionsMinOrderByAggregateInput
}
