import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MultipleQuestionsScalarWhereInput {

    @Field(() => [MultipleQuestionsScalarWhereInput], {nullable:true})
    AND?: Array<MultipleQuestionsScalarWhereInput>;

    @Field(() => [MultipleQuestionsScalarWhereInput], {nullable:true})
    OR?: Array<MultipleQuestionsScalarWhereInput>;

    @Field(() => [MultipleQuestionsScalarWhereInput], {nullable:true})
    NOT?: Array<MultipleQuestionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    multiple_question_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    challenge_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    hint?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
