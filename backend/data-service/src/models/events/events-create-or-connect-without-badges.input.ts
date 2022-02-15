import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventsWhereUniqueInput } from './events-where-unique.input';
import { EventsCreateWithoutBadgesInput } from './events-create-without-badges.input';

@InputType()
export class EventsCreateOrConnectWithoutBadgesInput {

    @Field(() => EventsWhereUniqueInput, {nullable:false})
    where!: EventsWhereUniqueInput;

    @Field(() => EventsCreateWithoutBadgesInput, {nullable:false})
    create!: EventsCreateWithoutBadgesInput;
}
