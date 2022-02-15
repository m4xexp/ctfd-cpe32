import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ChallengesRelationFilter } from '../challenges/challenges-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { MultipleChoiceQuestionListRelationFilter } from '../multiple-choice-question/multiple-choice-question-list-relation-filter.input';

@InputType()
export class MultipleQuestionsWhereInput {

    @Field(() => [MultipleQuestionsWhereInput], {nullable:true})
    AND?: Array<MultipleQuestionsWhereInput>;

    @Field(() => [MultipleQuestionsWhereInput], {nullable:true})
    OR?: Array<MultipleQuestionsWhereInput>;

    @Field(() => [MultipleQuestionsWhereInput], {nullable:true})
    NOT?: Array<MultipleQuestionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    multiple_question_id?: StringFilter;

    @Field(() => ChallengesRelationFilter, {nullable:true})
    challenges?: ChallengesRelationFilter;

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

    @Field(() => MultipleChoiceQuestionListRelationFilter, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionListRelationFilter;
}
