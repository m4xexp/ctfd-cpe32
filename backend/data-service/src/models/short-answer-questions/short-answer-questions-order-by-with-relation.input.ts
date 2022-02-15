import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChallengesOrderByWithRelationInput } from '../challenges/challenges-order-by-with-relation.input';

@InputType()
export class ShortAnswerQuestionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    short_answer_question_id?: keyof typeof SortOrder;

    @Field(() => ChallengesOrderByWithRelationInput, {nullable:true})
    challenges?: ChallengesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    question?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hint?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
