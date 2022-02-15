import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesCreateNestedManyWithoutBadgesInput } from '../user-badges/user-badges-create-nested-many-without-badges.input';
import { EventsCreateNestedManyWithoutBadgesInput } from '../events/events-create-nested-many-without-badges.input';
import { ChallengesCreateNestedManyWithoutBadgesInput } from '../challenges/challenges-create-nested-many-without-badges.input';

@InputType()
export class BadgesCreateInput {

    @Field(() => String, {nullable:true})
    badge_id?: string;

    @Field(() => String, {nullable:true})
    condition?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    link?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserBadgesCreateNestedManyWithoutBadgesInput, {nullable:true})
    userBadges?: UserBadgesCreateNestedManyWithoutBadgesInput;

    @Field(() => EventsCreateNestedManyWithoutBadgesInput, {nullable:true})
    events?: EventsCreateNestedManyWithoutBadgesInput;

    @Field(() => ChallengesCreateNestedManyWithoutBadgesInput, {nullable:true})
    challenges?: ChallengesCreateNestedManyWithoutBadgesInput;
}
