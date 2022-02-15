import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FlagQuestionsScalarWhereWithAggregatesInput {

    @Field(() => [FlagQuestionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FlagQuestionsScalarWhereWithAggregatesInput>;

    @Field(() => [FlagQuestionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FlagQuestionsScalarWhereWithAggregatesInput>;

    @Field(() => [FlagQuestionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FlagQuestionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    flag_question_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    challenge_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    video_link?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    question?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    answer?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
