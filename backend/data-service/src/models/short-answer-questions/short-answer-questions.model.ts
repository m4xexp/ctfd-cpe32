import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Challenges } from '../challenges/challenges.model';

@ObjectType()
export class ShortAnswerQuestions {

    @Field(() => ID, {nullable:false})
    short_answer_question_id!: string;

    @Field(() => Challenges, {nullable:false})
    challenges?: Challenges;

    @Field(() => String, {nullable:false})
    challenge_id!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    question!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    hint!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    answer!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
