import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventsWhereUniqueInput } from './events-where-unique.input';
import { EventsUpdateWithoutBadgesInput } from './events-update-without-badges.input';

@InputType()
export class EventsUpdateWithWhereUniqueWithoutBadgesInput {

    @Field(() => EventsWhereUniqueInput, {nullable:false})
    where!: EventsWhereUniqueInput;

    @Field(() => EventsUpdateWithoutBadgesInput, {nullable:false})
    data!: EventsUpdateWithoutBadgesInput;
}
