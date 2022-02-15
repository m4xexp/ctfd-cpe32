import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserBadgesUncheckedUpdateManyWithoutBadgesInput } from '../user-badges/user-badges-unchecked-update-many-without-badges.input';
import { EventsUncheckedUpdateManyWithoutBadgesInput } from '../events/events-unchecked-update-many-without-badges.input';
import { ChallengesUncheckedUpdateManyWithoutBadgesInput } from '../challenges/challenges-unchecked-update-many-without-badges.input';

@InputType()
export class BadgesUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    badge_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    condition?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    link?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserBadgesUncheckedUpdateManyWithoutBadgesInput, {nullable:true})
    userBadges?: UserBadgesUncheckedUpdateManyWithoutBadgesInput;

    @Field(() => EventsUncheckedUpdateManyWithoutBadgesInput, {nullable:true})
    events?: EventsUncheckedUpdateManyWithoutBadgesInput;

    @Field(() => ChallengesUncheckedUpdateManyWithoutBadgesInput, {nullable:true})
    challenges?: ChallengesUncheckedUpdateManyWithoutBadgesInput;
}
