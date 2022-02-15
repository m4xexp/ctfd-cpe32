import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesUncheckedCreateNestedManyWithoutBadgesInput } from '../user-badges/user-badges-unchecked-create-nested-many-without-badges.input';
import { ChallengesUncheckedCreateNestedManyWithoutBadgesInput } from '../challenges/challenges-unchecked-create-nested-many-without-badges.input';

@InputType()
export class BadgesUncheckedCreateWithoutEventsInput {

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

    @Field(() => UserBadgesUncheckedCreateNestedManyWithoutBadgesInput, {nullable:true})
    userBadges?: UserBadgesUncheckedCreateNestedManyWithoutBadgesInput;

    @Field(() => ChallengesUncheckedCreateNestedManyWithoutBadgesInput, {nullable:true})
    challenges?: ChallengesUncheckedCreateNestedManyWithoutBadgesInput;
}
