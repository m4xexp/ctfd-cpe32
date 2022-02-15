import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MultipleQuestionsScalarWhereWithAggregatesInput {

    @Field(() => [MultipleQuestionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MultipleQuestionsScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleQuestionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MultipleQuestionsScalarWhereWithAggregatesInput>;

    @Field(() => [MultipleQuestionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MultipleQuestionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    multiple_question_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    challenge_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    question?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    hint?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
