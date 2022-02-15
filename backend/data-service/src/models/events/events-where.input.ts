import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BadgesRelationFilter } from '../badges/badges-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EventsWhereInput {

    @Field(() => [EventsWhereInput], {nullable:true})
    AND?: Array<EventsWhereInput>;

    @Field(() => [EventsWhereInput], {nullable:true})
    OR?: Array<EventsWhereInput>;

    @Field(() => [EventsWhereInput], {nullable:true})
    NOT?: Array<EventsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    event_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    evnet_description?: StringFilter;

    @Field(() => BadgesRelationFilter, {nullable:true})
    badges?: BadgesRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    award_badge?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    flag_link?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    answer?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
