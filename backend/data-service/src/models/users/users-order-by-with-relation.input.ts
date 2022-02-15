import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserLoggingsOrderByRelationAggregateInput } from '../user-loggings/user-loggings-order-by-relation-aggregate.input';
import { UserBadgesOrderByRelationAggregateInput } from '../user-badges/user-badges-order-by-relation-aggregate.input';
import { TeamMembersOrderByRelationAggregateInput } from '../team-members/team-members-order-by-relation-aggregate.input';
import { UserTutorialsOrderByRelationAggregateInput } from '../user-tutorials/user-tutorials-order-by-relation-aggregate.input';
import { UserScoresOrderByRelationAggregateInput } from '../user-scores/user-scores-order-by-relation-aggregate.input';

@InputType()
export class UsersOrderByWithRelationInput {

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

    @Field(() => UserLoggingsOrderByRelationAggregateInput, {nullable:true})
    userLoggings?: UserLoggingsOrderByRelationAggregateInput;

    @Field(() => UserBadgesOrderByRelationAggregateInput, {nullable:true})
    userBadges?: UserBadgesOrderByRelationAggregateInput;

    @Field(() => TeamMembersOrderByRelationAggregateInput, {nullable:true})
    teamMembers?: TeamMembersOrderByRelationAggregateInput;

    @Field(() => UserTutorialsOrderByRelationAggregateInput, {nullable:true})
    userTutorials?: UserTutorialsOrderByRelationAggregateInput;

    @Field(() => UserScoresOrderByRelationAggregateInput, {nullable:true})
    userScores?: UserScoresOrderByRelationAggregateInput;
}
