import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserTutorialsWhereInput } from './user-tutorials-where.input'
import { UserTutorialsOrderByWithAggregationInput } from './user-tutorials-order-by-with-aggregation.input'
import { UserTutorialsScalarFieldEnum } from './user-tutorials-scalar-field.enum'
import { UserTutorialsScalarWhereWithAggregatesInput } from './user-tutorials-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { UserTutorialsCountAggregateInput } from './user-tutorials-count-aggregate.input'
import { UserTutorialsMinAggregateInput } from './user-tutorials-min-aggregate.input'
import { UserTutorialsMaxAggregateInput } from './user-tutorials-max-aggregate.input'

@ArgsType()
export class UserTutorialsGroupByArgs {
  @Field(() => UserTutorialsWhereInput, { nullable: true })
  where?: UserTutorialsWhereInput

  @Field(() => [UserTutorialsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UserTutorialsOrderByWithAggregationInput>

  @Field(() => [UserTutorialsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserTutorialsScalarFieldEnum>

  @Field(() => UserTutorialsScalarWhereWithAggregatesInput, { nullable: true })
  having?: UserTutorialsScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => UserTutorialsCountAggregateInput, { nullable: true })
  _count?: UserTutorialsCountAggregateInput

  @Field(() => UserTutorialsMinAggregateInput, { nullable: true })
  _min?: UserTutorialsMinAggregateInput

  @Field(() => UserTutorialsMaxAggregateInput, { nullable: true })
  _max?: UserTutorialsMaxAggregateInput
}
