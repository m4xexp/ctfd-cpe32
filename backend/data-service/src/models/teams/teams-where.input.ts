import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { TeamMembersListRelationFilter } from '../team-members/team-members-list-relation-filter.input';

@InputType()
export class TeamsWhereInput {

    @Field(() => [TeamsWhereInput], {nullable:true})
    AND?: Array<TeamsWhereInput>;

    @Field(() => [TeamsWhereInput], {nullable:true})
    OR?: Array<TeamsWhereInput>;

    @Field(() => [TeamsWhereInput], {nullable:true})
    NOT?: Array<TeamsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    team_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    team_profile_pic?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    conuntry_code?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    banned?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    github_link?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    twitter_link?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    facebook_link?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => TeamMembersListRelationFilter, {nullable:true})
    teamMembers?: TeamMembersListRelationFilter;
}
