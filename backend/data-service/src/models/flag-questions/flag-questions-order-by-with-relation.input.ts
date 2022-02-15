import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChallengesOrderByWithRelationInput } from '../challenges/challenges-order-by-with-relation.input';

@InputType()
export class FlagQuestionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    flag_question_id?: keyof typeof SortOrder;

    @Field(() => ChallengesOrderByWithRelationInput, {nullable:true})
    challenges?: ChallengesOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    challenge_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    video_link?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    question?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
