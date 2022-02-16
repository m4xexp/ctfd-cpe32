import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsWhereInput } from './flag-questions-where.input'
import { FlagQuestionsOrderByWithAggregationInput } from './flag-questions-order-by-with-aggregation.input'
import { FlagQuestionsScalarFieldEnum } from './flag-questions-scalar-field.enum'
import { FlagQuestionsScalarWhereWithAggregatesInput } from './flag-questions-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { FlagQuestionsCountAggregateInput } from './flag-questions-count-aggregate.input'
import { FlagQuestionsMinAggregateInput } from './flag-questions-min-aggregate.input'
import { FlagQuestionsMaxAggregateInput } from './flag-questions-max-aggregate.input'

@ArgsType()
export class FlagQuestionsGroupByArgs {
  @Field(() => FlagQuestionsWhereInput, { nullable: true })
  where?: FlagQuestionsWhereInput

  @Field(() => [FlagQuestionsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<FlagQuestionsOrderByWithAggregationInput>

  @Field(() => [FlagQuestionsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof FlagQuestionsScalarFieldEnum>

  @Field(() => FlagQuestionsScalarWhereWithAggregatesInput, { nullable: true })
  having?: FlagQuestionsScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => FlagQuestionsCountAggregateInput, { nullable: true })
  _count?: FlagQuestionsCountAggregateInput

  @Field(() => FlagQuestionsMinAggregateInput, { nullable: true })
  _min?: FlagQuestionsMinAggregateInput

  @Field(() => FlagQuestionsMaxAggregateInput, { nullable: true })
  _max?: FlagQuestionsMaxAggregateInput
}
