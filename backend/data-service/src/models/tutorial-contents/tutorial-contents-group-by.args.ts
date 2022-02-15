import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TutorialContentsWhereInput } from './tutorial-contents-where.input';
import { TutorialContentsOrderByWithAggregationInput } from './tutorial-contents-order-by-with-aggregation.input';
import { TutorialContentsScalarFieldEnum } from './tutorial-contents-scalar-field.enum';
import { TutorialContentsScalarWhereWithAggregatesInput } from './tutorial-contents-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TutorialContentsCountAggregateInput } from './tutorial-contents-count-aggregate.input';
import { TutorialContentsMinAggregateInput } from './tutorial-contents-min-aggregate.input';
import { TutorialContentsMaxAggregateInput } from './tutorial-contents-max-aggregate.input';

@ArgsType()
export class TutorialContentsGroupByArgs {

    @Field(() => TutorialContentsWhereInput, {nullable:true})
    where?: TutorialContentsWhereInput;

    @Field(() => [TutorialContentsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TutorialContentsOrderByWithAggregationInput>;

    @Field(() => [TutorialContentsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TutorialContentsScalarFieldEnum>;

    @Field(() => TutorialContentsScalarWhereWithAggregatesInput, {nullable:true})
    having?: TutorialContentsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TutorialContentsCountAggregateInput, {nullable:true})
    _count?: TutorialContentsCountAggregateInput;

    @Field(() => TutorialContentsMinAggregateInput, {nullable:true})
    _min?: TutorialContentsMinAggregateInput;

    @Field(() => TutorialContentsMaxAggregateInput, {nullable:true})
    _max?: TutorialContentsMaxAggregateInput;
}
