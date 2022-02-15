import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FlagQuestionsCountAggregate } from './flag-questions-count-aggregate.output';
import { FlagQuestionsMinAggregate } from './flag-questions-min-aggregate.output';
import { FlagQuestionsMaxAggregate } from './flag-questions-max-aggregate.output';

@ObjectType()
export class FlagQuestionsGroupBy {

    @Field(() => String, {nullable:false})
    flag_question_id!: string;

    @Field(() => String, {nullable:false})
    challenge_id!: string;

    @Field(() => String, {nullable:false})
    video_link!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => String, {nullable:false})
    answer!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FlagQuestionsCountAggregate, {nullable:true})
    _count?: FlagQuestionsCountAggregate;

    @Field(() => FlagQuestionsMinAggregate, {nullable:true})
    _min?: FlagQuestionsMinAggregate;

    @Field(() => FlagQuestionsMaxAggregate, {nullable:true})
    _max?: FlagQuestionsMaxAggregate;
}
