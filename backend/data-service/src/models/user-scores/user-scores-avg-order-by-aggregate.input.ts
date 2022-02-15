import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserScoresAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    base_score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time_score?: keyof typeof SortOrder;
}
