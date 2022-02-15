import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShortAnswerQuestionsCountAggregate } from './short-answer-questions-count-aggregate.output';
import { ShortAnswerQuestionsMinAggregate } from './short-answer-questions-min-aggregate.output';
import { ShortAnswerQuestionsMaxAggregate } from './short-answer-questions-max-aggregate.output';

@ObjectType()
export class AggregateShortAnswerQuestions {

    @Field(() => ShortAnswerQuestionsCountAggregate, {nullable:true})
    _count?: ShortAnswerQuestionsCountAggregate;

    @Field(() => ShortAnswerQuestionsMinAggregate, {nullable:true})
    _min?: ShortAnswerQuestionsMinAggregate;

    @Field(() => ShortAnswerQuestionsMaxAggregate, {nullable:true})
    _max?: ShortAnswerQuestionsMaxAggregate;
}
