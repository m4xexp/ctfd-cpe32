import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LevelsOrderByWithRelationInput } from '../levels/levels-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { CategoriesOrderByWithRelationInput } from '../categories/categories-order-by-with-relation.input';
import { BadgesOrderByWithRelationInput } from '../badges/badges-order-by-with-relation.input';
import { UserScoresOrderByRelationAggregateInput } from '../user-scores/user-scores-order-by-relation-aggregate.input';
import { MultipleQuestionsOrderByRelationAggregateInput } from '../multiple-questions/multiple-questions-order-by-relation-aggregate.input';
import { ShortAnswerQuestionsOrderByRelationAggregateInput } from '../short-answer-questions/short-answer-questions-order-by-relation-aggregate.input';
import { FlagQuestionsOrderByRelationAggregateInput } from '../flag-questions/flag-questions-order-by-relation-aggregate.input';

@InputType()
export class ChallengesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    question?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => LevelsOrderByWithRelationInput, {nullable:true})
    levels?: LevelsOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    level_id?: keyof typeof SortOrder;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    types?: TypesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    types_id?: keyof typeof SortOrder;

    @Field(() => CategoriesOrderByWithRelationInput, {nullable:true})
    categories?: CategoriesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    categories_id?: keyof typeof SortOrder;

    @Field(() => BadgesOrderByWithRelationInput, {nullable:true})
    badges?: BadgesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    award_badge?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    scorce?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_cost?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserScoresOrderByRelationAggregateInput, {nullable:true})
    userScores?: UserScoresOrderByRelationAggregateInput;

    @Field(() => MultipleQuestionsOrderByRelationAggregateInput, {nullable:true})
    multipleQuestions?: MultipleQuestionsOrderByRelationAggregateInput;

    @Field(() => ShortAnswerQuestionsOrderByRelationAggregateInput, {nullable:true})
    shortAnswerQuestions?: ShortAnswerQuestionsOrderByRelationAggregateInput;

    @Field(() => FlagQuestionsOrderByRelationAggregateInput, {nullable:true})
    flagQuestions?: FlagQuestionsOrderByRelationAggregateInput;
}
