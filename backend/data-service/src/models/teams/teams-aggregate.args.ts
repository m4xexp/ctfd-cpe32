import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamsWhereInput } from './teams-where.input'
import { TeamsOrderByWithRelationInput } from './teams-order-by-with-relation.input'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TeamsCountAggregateInput } from './teams-count-aggregate.input'
import { TeamsMinAggregateInput } from './teams-min-aggregate.input'
import { TeamsMaxAggregateInput } from './teams-max-aggregate.input'

@ArgsType()
export class TeamsAggregateArgs {
  @Field(() => TeamsWhereInput, { nullable: true })
  where?: TeamsWhereInput

  @Field(() => [TeamsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TeamsOrderByWithRelationInput>

  @Field(() => TeamsWhereUniqueInput, { nullable: true })
  cursor?: TeamsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => TeamsCountAggregateInput, { nullable: true })
  _count?: TeamsCountAggregateInput

  @Field(() => TeamsMinAggregateInput, { nullable: true })
  _min?: TeamsMinAggregateInput

  @Field(() => TeamsMaxAggregateInput, { nullable: true })
  _max?: TeamsMaxAggregateInput
}
