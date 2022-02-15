import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserBadgesScalarWhereWithAggregatesInput {

    @Field(() => [UserBadgesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserBadgesScalarWhereWithAggregatesInput>;

    @Field(() => [UserBadgesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserBadgesScalarWhereWithAggregatesInput>;

    @Field(() => [UserBadgesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserBadgesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    badge_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
