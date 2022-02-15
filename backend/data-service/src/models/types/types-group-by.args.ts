import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { TypesOrderByWithAggregationInput } from './types-order-by-with-aggregation.input';
import { TypesScalarFieldEnum } from './types-scalar-field.enum';
import { TypesScalarWhereWithAggregatesInput } from './types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TypesCountAggregateInput } from './types-count-aggregate.input';
import { TypesMinAggregateInput } from './types-min-aggregate.input';
import { TypesMaxAggregateInput } from './types-max-aggregate.input';

@ArgsType()
export class TypesGroupByArgs {

    @Field(() => TypesWhereInput, {nullable:true})
    where?: TypesWhereInput;

    @Field(() => [TypesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TypesOrderByWithAggregationInput>;

    @Field(() => [TypesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TypesScalarFieldEnum>;

    @Field(() => TypesScalarWhereWithAggregatesInput, {nullable:true})
    having?: TypesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TypesCountAggregateInput, {nullable:true})
    _count?: TypesCountAggregateInput;

    @Field(() => TypesMinAggregateInput, {nullable:true})
    _min?: TypesMinAggregateInput;

    @Field(() => TypesMaxAggregateInput, {nullable:true})
    _max?: TypesMaxAggregateInput;
}
