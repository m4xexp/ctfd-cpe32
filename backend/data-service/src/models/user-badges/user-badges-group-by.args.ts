import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesWhereInput } from './user-badges-where.input'
import { UserBadgesOrderByWithAggregationInput } from './user-badges-order-by-with-aggregation.input'
import { UserBadgesScalarFieldEnum } from './user-badges-scalar-field.enum'
import { UserBadgesScalarWhereWithAggregatesInput } from './user-badges-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { UserBadgesCountAggregateInput } from './user-badges-count-aggregate.input'
import { UserBadgesMinAggregateInput } from './user-badges-min-aggregate.input'
import { UserBadgesMaxAggregateInput } from './user-badges-max-aggregate.input'

@ArgsType()
export class UserBadgesGroupByArgs {
  @Field(() => UserBadgesWhereInput, { nullable: true })
  where?: UserBadgesWhereInput

  @Field(() => [UserBadgesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserBadgesOrderByWithAggregationInput>

  @Field(() => [UserBadgesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserBadgesScalarFieldEnum>

  @Field(() => UserBadgesScalarWhereWithAggregatesInput, { nullable: true })
  having?: UserBadgesScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => UserBadgesCountAggregateInput, { nullable: true })
  _count?: UserBadgesCountAggregateInput

  @Field(() => UserBadgesMinAggregateInput, { nullable: true })
  _min?: UserBadgesMinAggregateInput

  @Field(() => UserBadgesMaxAggregateInput, { nullable: true })
  _max?: UserBadgesMaxAggregateInput
}
