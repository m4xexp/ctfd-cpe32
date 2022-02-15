import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TeamsCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    team_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    team_profile_pic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conuntry_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banned?: keyof typeof SortOrder;

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
