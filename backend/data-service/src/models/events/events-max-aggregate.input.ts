import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    event_id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    evnet_description?: true;

    @Field(() => Boolean, {nullable:true})
    award_badge?: true;

    @Field(() => Boolean, {nullable:true})
    flag_link?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    question?: true;

    @Field(() => Boolean, {nullable:true})
    answer?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
