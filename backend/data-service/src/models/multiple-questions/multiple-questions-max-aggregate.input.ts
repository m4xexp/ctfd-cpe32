import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MultipleQuestionsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    multiple_question_id?: true;

    @Field(() => Boolean, {nullable:true})
    challenge_id?: true;

    @Field(() => Boolean, {nullable:true})
    question?: true;

    @Field(() => Boolean, {nullable:true})
    hint?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
