import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { LevelsRelationFilter } from '../levels/levels-relation-filter.input';
import { TypesRelationFilter } from '../types/types-relation-filter.input';
import { CategoriesRelationFilter } from '../categories/categories-relation-filter.input';
import { BadgesRelationFilter } from '../badges/badges-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScoresListRelationFilter } from '../user-scores/user-scores-list-relation-filter.input';
import { MultipleQuestionsListRelationFilter } from '../multiple-questions/multiple-questions-list-relation-filter.input';
import { ShortAnswerQuestionsListRelationFilter } from '../short-answer-questions/short-answer-questions-list-relation-filter.input';
import { FlagQuestionsListRelationFilter } from '../flag-questions/flag-questions-list-relation-filter.input';

@InputType()
export class ChallengesWhereInput {

    @Field(() => [ChallengesWhereInput], {nullable:true})
    AND?: Array<ChallengesWhereInput>;

    @Field(() => [ChallengesWhereInput], {nullable:true})
    OR?: Array<ChallengesWhereInput>;

    @Field(() => [ChallengesWhereInput], {nullable:true})
    NOT?: Array<ChallengesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    challenge_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => LevelsRelationFilter, {nullable:true})
    levels?: LevelsRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    level_id?: StringFilter;

    @Field(() => TypesRelationFilter, {nullable:true})
    types?: TypesRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    types_id?: StringFilter;

    @Field(() => CategoriesRelationFilter, {nullable:true})
    categories?: CategoriesRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    categories_id?: StringFilter;

    @Field(() => BadgesRelationFilter, {nullable:true})
    badges?: BadgesRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    award_badge?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    scorce?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_time?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_cost?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScoresListRelationFilter, {nullable:true})
    userScores?: UserScoresListRelationFilter;

    @Field(() => MultipleQuestionsListRelationFilter, {nullable:true})
    multipleQuestions?: MultipleQuestionsListRelationFilter;

    @Field(() => ShortAnswerQuestionsListRelationFilter, {nullable:true})
    shortAnswerQuestions?: ShortAnswerQuestionsListRelationFilter;

    @Field(() => FlagQuestionsListRelationFilter, {nullable:true})
    flagQuestions?: FlagQuestionsListRelationFilter;
}
