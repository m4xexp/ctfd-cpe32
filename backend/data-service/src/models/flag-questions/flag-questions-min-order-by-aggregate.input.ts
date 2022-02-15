import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FlagQuestionsMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    flag_question_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    video_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    question?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
