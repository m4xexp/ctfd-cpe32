import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UsersCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_invite_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile_pic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conuntry_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quick_start_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile_description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    github_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitter_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facebook_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
