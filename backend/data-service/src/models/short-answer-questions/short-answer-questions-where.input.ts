import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ChallengesRelationFilter } from '../challenges/challenges-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ShortAnswerQuestionsWhereInput {

    @Field(() => [ShortAnswerQuestionsWhereInput], {nullable:true})
    AND?: Array<ShortAnswerQuestionsWhereInput>;

    @Field(() => [ShortAnswerQuestionsWhereInput], {nullable:true})
    OR?: Array<ShortAnswerQuestionsWhereInput>;

    @Field(() => [ShortAnswerQuestionsWhereInput], {nullable:true})
    NOT?: Array<ShortAnswerQuestionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    short_answer_question_id?: StringFilter;

    @Field(() => ChallengesRelationFilter, {nullable:true})
    challenges?: ChallengesRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    challenge_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    hint?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    answer?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
