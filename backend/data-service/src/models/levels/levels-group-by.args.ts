import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LevelsWhereInput } from './levels-where.input'
import { LevelsOrderByWithAggregationInput } from './levels-order-by-with-aggregation.input'
import { LevelsScalarFieldEnum } from './levels-scalar-field.enum'
import { LevelsScalarWhereWithAggregatesInput } from './levels-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { LevelsCountAggregateInput } from './levels-count-aggregate.input'
import { LevelsMinAggregateInput } from './levels-min-aggregate.input'
import { LevelsMaxAggregateInput } from './levels-max-aggregate.input'

@ArgsType()
export class LevelsGroupByArgs {
  @Field(() => LevelsWhereInput, { nullable: true })
  where?: LevelsWhereInput

  @Field(() => [LevelsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<LevelsOrderByWithAggregationInput>

  @Field(() => [LevelsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof LevelsScalarFieldEnum>

  @Field(() => LevelsScalarWhereWithAggregatesInput, { nullable: true })
  having?: LevelsScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => LevelsCountAggregateInput, { nullable: true })
  _count?: LevelsCountAggregateInput

  @Field(() => LevelsMinAggregateInput, { nullable: true })
  _min?: LevelsMinAggregateInput

  @Field(() => LevelsMaxAggregateInput, { nullable: true })
  _max?: LevelsMaxAggregateInput
}
