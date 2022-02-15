import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserBadgesOrderByRelationAggregateInput } from '../user-badges/user-badges-order-by-relation-aggregate.input';
import { EventsOrderByRelationAggregateInput } from '../events/events-order-by-relation-aggregate.input';
import { ChallengesOrderByRelationAggregateInput } from '../challenges/challenges-order-by-relation-aggregate.input';

@InputType()
export class BadgesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    badge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    condition?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserBadgesOrderByRelationAggregateInput, {nullable:true})
    userBadges?: UserBadgesOrderByRelationAggregateInput;

    @Field(() => EventsOrderByRelationAggregateInput, {nullable:true})
    events?: EventsOrderByRelationAggregateInput;

    @Field(() => ChallengesOrderByRelationAggregateInput, {nullable:true})
    challenges?: ChallengesOrderByRelationAggregateInput;
}
