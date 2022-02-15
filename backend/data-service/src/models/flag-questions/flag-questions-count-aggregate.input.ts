import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FlagQuestionsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    flag_question_id?: true;

    @Field(() => Boolean, {nullable:true})
    challenge_id?: true;

    @Field(() => Boolean, {nullable:true})
    video_link?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    question?: true;

    @Field(() => Boolean, {nullable:true})
    answer?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
