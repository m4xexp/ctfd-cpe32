import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateNestedOneWithoutFlagQuestionsInput } from '../challenges/challenges-create-nested-one-without-flag-questions.input';

@InputType()
export class FlagQuestionsCreateInput {

    @Field(() => String, {nullable:true})
    flag_question_id?: string;

    @Field(() => String, {nullable:true})
    video_link?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => String, {nullable:true})
    answer?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChallengesCreateNestedOneWithoutFlagQuestionsInput, {nullable:false})
    challenges!: ChallengesCreateNestedOneWithoutFlagQuestionsInput;
}
