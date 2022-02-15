import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamsWhereInput } from './teams-where.input';
import { TeamsOrderByWithAggregationInput } from './teams-order-by-with-aggregation.input';
import { TeamsScalarFieldEnum } from './teams-scalar-field.enum';
import { TeamsScalarWhereWithAggregatesInput } from './teams-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TeamsCountAggregateInput } from './teams-count-aggregate.input';
import { TeamsMinAggregateInput } from './teams-min-aggregate.input';
import { TeamsMaxAggregateInput } from './teams-max-aggregate.input';

@ArgsType()
export class TeamsGroupByArgs {

    @Field(() => TeamsWhereInput, {nullable:true})
    where?: TeamsWhereInput;

    @Field(() => [TeamsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TeamsOrderByWithAggregationInput>;

    @Field(() => [TeamsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TeamsScalarFieldEnum>;

    @Field(() => TeamsScalarWhereWithAggregatesInput, {nullable:true})
    having?: TeamsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TeamsCountAggregateInput, {nullable:true})
    _count?: TeamsCountAggregateInput;

    @Field(() => TeamsMinAggregateInput, {nullable:true})
    _min?: TeamsMinAggregateInput;

    @Field(() => TeamsMaxAggregateInput, {nullable:true})
    _max?: TeamsMaxAggregateInput;
}
