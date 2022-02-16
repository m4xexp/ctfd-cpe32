import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input'
import { MultipleQuestionsOrderByWithRelationInput } from './multiple-questions-order-by-with-relation.input'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { Int } from '@nestjs/graphql'
import { MultipleQuestionsCountAggregateInput } from './multiple-questions-count-aggregate.input'
import { MultipleQuestionsMinAggregateInput } from './multiple-questions-min-aggregate.input'
import { MultipleQuestionsMaxAggregateInput } from './multiple-questions-max-aggregate.input'

@ArgsType()
export class MultipleQuestionsAggregateArgs {
  @Field(() => MultipleQuestionsWhereInput, { nullable: true })
  where?: MultipleQuestionsWhereInput

  @Field(() => [MultipleQuestionsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MultipleQuestionsOrderByWithRelationInput>

  @Field(() => MultipleQuestionsWhereUniqueInput, { nullable: true })
  cursor?: MultipleQuestionsWhereUniqueInput

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
