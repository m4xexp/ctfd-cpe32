import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserTutorialsScalarWhereWithAggregatesInput {

    @Field(() => [UserTutorialsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserTutorialsScalarWhereWithAggregatesInput>;

    @Field(() => [UserTutorialsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserTutorialsScalarWhereWithAggregatesInput>;

    @Field(() => [UserTutorialsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserTutorialsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    chapter_id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
