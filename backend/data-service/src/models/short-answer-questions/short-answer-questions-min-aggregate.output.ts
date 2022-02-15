import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShortAnswerQuestionsMinAggregate {

    @Field(() => String, {nullable:true})
    short_answer_question_id?: string;

    @Field(() => String, {nullable:true})
    challenge_id?: string;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => String, {nullable:true})
    hint?: string;

    @Field(() => String, {nullable:true})
    answer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
