import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input'
import { MultipleQuestionsOrderByWithAggregationInput } from './multiple-questions-order-by-with-aggregation.input'
import { MultipleQuestionsScalarFieldEnum } from './multiple-questions-scalar-field.enum'
import { MultipleQuestionsScalarWhereWithAggregatesInput } from './multiple-questions-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { MultipleQuestionsCountAggregateInput } from './multiple-questions-count-aggregate.input'
import { MultipleQuestionsMinAggregateInput } from './multiple-questions-min-aggregate.input'
import { MultipleQuestionsMaxAggregateInput } from './multiple-questions-max-aggregate.input'

@ArgsType()
export class MultipleQuestionsGroupByArgs {
  @Field(() => MultipleQuestionsWhereInput, { nullable: true })
  where?: MultipleQuestionsWhereInput

  @Field(() => [MultipleQuestionsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<MultipleQuestionsOrderByWithAggregationInput>

  @Field(() => [MultipleQuestionsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof MultipleQuestionsScalarFieldEnum>

  @Field(() => MultipleQuestionsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: MultipleQuestionsScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => MultipleQuestionsCountAggregateInput, { nullable: true })
  _count?: MultipleQuestionsCountAggregateInput

  @Field(() => MultipleQuestionsMinAggregateInput, { nullable: true })
  _min?: MultipleQuestionsMinAggregateInput

  @Field(() => MultipleQuestionsMaxAggregateInput, { nullable: true })
  _max?: MultipleQuestionsMaxAggregateInput
}
