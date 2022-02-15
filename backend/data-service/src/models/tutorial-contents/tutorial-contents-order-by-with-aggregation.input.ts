import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TutorialContentsCountOrderByAggregateInput } from './tutorial-contents-count-order-by-aggregate.input';
import { TutorialContentsMaxOrderByAggregateInput } from './tutorial-contents-max-order-by-aggregate.input';
import { TutorialContentsMinOrderByAggregateInput } from './tutorial-contents-min-order-by-aggregate.input';

@InputType()
export class TutorialContentsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    tutorial_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TutorialContentsCountOrderByAggregateInput, {nullable:true})
    _count?: TutorialContentsCountOrderByAggregateInput;

    @Field(() => TutorialContentsMaxOrderByAggregateInput, {nullable:true})
    _max?: TutorialContentsMaxOrderByAggregateInput;

    @Field(() => TutorialContentsMinOrderByAggregateInput, {nullable:true})
    _min?: TutorialContentsMinOrderByAggregateInput;
}
