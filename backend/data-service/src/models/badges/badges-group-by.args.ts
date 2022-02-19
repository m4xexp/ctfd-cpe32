import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BadgesWhereInput } from './badges-where.input'
import { BadgesOrderByWithAggregationInput } from './badges-order-by-with-aggregation.input'
import { BadgesScalarFieldEnum } from './badges-scalar-field.enum'
import { BadgesScalarWhereWithAggregatesInput } from './badges-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { BadgesCountAggregateInput } from './badges-count-aggregate.input'
import { BadgesMinAggregateInput } from './badges-min-aggregate.input'
import { BadgesMaxAggregateInput } from './badges-max-aggregate.input'

@ArgsType()
export class BadgesGroupByArgs {
  @Field(() => BadgesWhereInput, { nullable: true })
  where?: BadgesWhereInput

  @Field(() => [BadgesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BadgesOrderByWithAggregationInput>

  @Field(() => [BadgesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BadgesScalarFieldEnum>

  @Field(() => BadgesScalarWhereWithAggregatesInput, { nullable: true })
  having?: BadgesScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => BadgesCountAggregateInput, { nullable: true })
  _count?: BadgesCountAggregateInput

  @Field(() => BadgesMinAggregateInput, { nullable: true })
  _min?: BadgesMinAggregateInput

  @Field(() => BadgesMaxAggregateInput, { nullable: true })
  _max?: BadgesMaxAggregateInput
}
