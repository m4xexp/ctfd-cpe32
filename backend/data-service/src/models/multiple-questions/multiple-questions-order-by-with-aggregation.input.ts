import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { MultipleQuestionsCountOrderByAggregateInput } from './multiple-questions-count-order-by-aggregate.input'
import { MultipleQuestionsMaxOrderByAggregateInput } from './multiple-questions-max-order-by-aggregate.input'
import { MultipleQuestionsMinOrderByAggregateInput } from './multiple-questions-min-order-by-aggregate.input'

@InputType()
export class MultipleQuestionsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  multiple_question_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  challenge_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  question?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  hint?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => MultipleQuestionsCountOrderByAggregateInput, { nullable: true })
  _count?: MultipleQuestionsCountOrderByAggregateInput

  @Field(() => MultipleQuestionsMaxOrderByAggregateInput, { nullable: true })
  _max?: MultipleQuestionsMaxOrderByAggregateInput

  @Field(() => MultipleQuestionsMinOrderByAggregateInput, { nullable: true })
  _min?: MultipleQuestionsMinOrderByAggregateInput
}
