import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersRelationFilter } from '../users/users-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BadgesRelationFilter } from '../badges/badges-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserBadgesWhereInput {

    @Field(() => [UserBadgesWhereInput], {nullable:true})
    AND?: Array<UserBadgesWhereInput>;

    @Field(() => [UserBadgesWhereInput], {nullable:true})
    OR?: Array<UserBadgesWhereInput>;

    @Field(() => [UserBadgesWhereInput], {nullable:true})
    NOT?: Array<UserBadgesWhereInput>;

    @Field(() => UsersRelationFilter, {nullable:true})
    users?: UsersRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => BadgesRelationFilter, {nullable:true})
    badges?: BadgesRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    badge_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
