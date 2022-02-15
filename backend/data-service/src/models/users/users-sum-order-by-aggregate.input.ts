import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UsersSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    user_invite_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_score?: keyof typeof SortOrder;
}
