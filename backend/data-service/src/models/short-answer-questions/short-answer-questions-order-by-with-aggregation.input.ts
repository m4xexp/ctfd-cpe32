import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { ShortAnswerQuestionsCountOrderByAggregateInput } from './short-answer-questions-count-order-by-aggregate.input'
import { ShortAnswerQuestionsMaxOrderByAggregateInput } from './short-answer-questions-max-order-by-aggregate.input'
import { ShortAnswerQuestionsMinOrderByAggregateInput } from './short-answer-questions-min-order-by-aggregate.input'

@InputType()
export class ShortAnswerQuestionsOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  short_answer_question_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  challenge_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  question?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  hint?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  answer?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => ShortAnswerQuestionsCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ShortAnswerQuestionsCountOrderByAggregateInput

  @Field(() => ShortAnswerQuestionsMaxOrderByAggregateInput, { nullable: true })
  _max?: ShortAnswerQuestionsMaxOrderByAggregateInput

  @Field(() => ShortAnswerQuestionsMinOrderByAggregateInput, { nullable: true })
  _min?: ShortAnswerQuestionsMinOrderByAggregateInput
}
