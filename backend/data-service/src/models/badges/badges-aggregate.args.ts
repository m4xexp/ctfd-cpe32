import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BadgesWhereInput } from './badges-where.input'
import { BadgesOrderByWithRelationInput } from './badges-order-by-with-relation.input'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'
import { Int } from '@nestjs/graphql'
import { BadgesCountAggregateInput } from './badges-count-aggregate.input'
import { BadgesMinAggregateInput } from './badges-min-aggregate.input'
import { BadgesMaxAggregateInput } from './badges-max-aggregate.input'

@ArgsType()
export class BadgesAggregateArgs {
  @Field(() => BadgesWhereInput, { nullable: true })
  where?: BadgesWhereInput

  @Field(() => [BadgesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BadgesOrderByWithRelationInput>

  @Field(() => BadgesWhereUniqueInput, { nullable: true })
  cursor?: BadgesWhereUniqueInput

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
