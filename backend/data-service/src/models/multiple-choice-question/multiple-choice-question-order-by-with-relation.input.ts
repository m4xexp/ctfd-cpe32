import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MultipleQuestionsOrderByWithRelationInput } from '../multiple-questions/multiple-questions-order-by-with-relation.input';

@InputType()
export class MultipleChoiceQuestionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    multiple_choice_question_id?: keyof typeof SortOrder;

    @Field(() => MultipleQuestionsOrderByWithRelationInput, {nullable:true})
    multipleQuestions?: MultipleQuestionsOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    multiple_question_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    correct_flag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
