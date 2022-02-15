import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoriesWhereInput } from './categories-where.input';
import { CategoriesOrderByWithAggregationInput } from './categories-order-by-with-aggregation.input';
import { CategoriesScalarFieldEnum } from './categories-scalar-field.enum';
import { CategoriesScalarWhereWithAggregatesInput } from './categories-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CategoriesCountAggregateInput } from './categories-count-aggregate.input';
import { CategoriesMinAggregateInput } from './categories-min-aggregate.input';
import { CategoriesMaxAggregateInput } from './categories-max-aggregate.input';

@ArgsType()
export class CategoriesGroupByArgs {

    @Field(() => CategoriesWhereInput, {nullable:true})
    where?: CategoriesWhereInput;

    @Field(() => [CategoriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoriesOrderByWithAggregationInput>;

    @Field(() => [CategoriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoriesScalarFieldEnum>;

    @Field(() => CategoriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: CategoriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CategoriesCountAggregateInput, {nullable:true})
    _count?: CategoriesCountAggregateInput;

    @Field(() => CategoriesMinAggregateInput, {nullable:true})
    _min?: CategoriesMinAggregateInput;

    @Field(() => CategoriesMaxAggregateInput, {nullable:true})
    _max?: CategoriesMaxAggregateInput;
}
