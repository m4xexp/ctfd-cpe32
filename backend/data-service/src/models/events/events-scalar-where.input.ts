import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class EventsScalarWhereInput {

    @Field(() => [EventsScalarWhereInput], {nullable:true})
    AND?: Array<EventsScalarWhereInput>;

    @Field(() => [EventsScalarWhereInput], {nullable:true})
    OR?: Array<EventsScalarWhereInput>;

    @Field(() => [EventsScalarWhereInput], {nullable:true})
    NOT?: Array<EventsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    event_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    evnet_description?: StringFilter;

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
