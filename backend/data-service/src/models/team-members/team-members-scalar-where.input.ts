import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TeamMembersScalarWhereInput {

    @Field(() => [TeamMembersScalarWhereInput], {nullable:true})
    AND?: Array<TeamMembersScalarWhereInput>;

    @Field(() => [TeamMembersScalarWhereInput], {nullable:true})
    OR?: Array<TeamMembersScalarWhereInput>;

    @Field(() => [TeamMembersScalarWhereInput], {nullable:true})
    NOT?: Array<TeamMembersScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    team_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
