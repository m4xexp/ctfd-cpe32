import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShortAnswerQuestionsCountAggregate } from './short-answer-questions-count-aggregate.output';
import { ShortAnswerQuestionsMinAggregate } from './short-answer-questions-min-aggregate.output';
import { ShortAnswerQuestionsMaxAggregate } from './short-answer-questions-max-aggregate.output';

@ObjectType()
export class ShortAnswerQuestionsGroupBy {

    @Field(() => String, {nullable:false})
    short_answer_question_id!: string;

    @Field(() => String, {nullable:false})
    challenge_id!: string;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => String, {nullable:false})
    hint!: string;

    @Field(() => String, {nullable:false})
    answer!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ShortAnswerQuestionsCountAggregate, {nullable:true})
    _count?: ShortAnswerQuestionsCountAggregate;

    @Field(() => ShortAnswerQuestionsMinAggregate, {nullable:true})
    _min?: ShortAnswerQuestionsMinAggregate;

    @Field(() => ShortAnswerQuestionsMaxAggregate, {nullable:true})
    _max?: ShortAnswerQuestionsMaxAggregate;
}
