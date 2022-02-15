import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TutorialChapterDatasMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    chapter_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tutorial_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chapter_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    video_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flag_link?: keyof typeof SortOrder;

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
