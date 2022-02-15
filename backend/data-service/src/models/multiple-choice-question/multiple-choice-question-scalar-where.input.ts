import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MultipleChoiceQuestionScalarWhereInput {

    @Field(() => [MultipleChoiceQuestionScalarWhereInput], {nullable:true})
    AND?: Array<MultipleChoiceQuestionScalarWhereInput>;

    @Field(() => [MultipleChoiceQuestionScalarWhereInput], {nullable:true})
    OR?: Array<MultipleChoiceQuestionScalarWhereInput>;

    @Field(() => [MultipleChoiceQuestionScalarWhereInput], {nullable:true})
    NOT?: Array<MultipleChoiceQuestionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    multiple_choice_question_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    multiple_question_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    answer?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    correct_flag?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
