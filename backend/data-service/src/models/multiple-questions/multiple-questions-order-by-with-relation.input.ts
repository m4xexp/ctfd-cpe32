import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChallengesOrderByWithRelationInput } from '../challenges/challenges-order-by-with-relation.input';
import { MultipleChoiceQuestionOrderByRelationAggregateInput } from '../multiple-choice-question/multiple-choice-question-order-by-relation-aggregate.input';

@InputType()
export class MultipleQuestionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    multiple_question_id?: keyof typeof SortOrder;

    @Field(() => ChallengesOrderByWithRelationInput, {nullable:true})
    challenges?: ChallengesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    question?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hint?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => MultipleChoiceQuestionOrderByRelationAggregateInput, {nullable:true})
    multipleChoiceQuestion?: MultipleChoiceQuestionOrderByRelationAggregateInput;
}
