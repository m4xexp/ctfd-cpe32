import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Challenges } from '../challenges/challenges.model';
import { MultipleChoiceQuestion } from '../multiple-choice-question/multiple-choice-question.model';
import { MultipleQuestionsCount } from './multiple-questions-count.output';

@ObjectType()
export class MultipleQuestions {

    @Field(() => ID, {nullable:false})
    multiple_question_id!: string;

    @Field(() => Challenges, {nullable:false})
    challenges?: Challenges;

    @Field(() => String, {nullable:false})
    challenge_id!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    question!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    hint!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [MultipleChoiceQuestion], {nullable:true})
    multipleChoiceQuestion?: Array<MultipleChoiceQuestion>;

    @Field(() => MultipleQuestionsCount, {nullable:false})
    _count?: MultipleQuestionsCount;
}
