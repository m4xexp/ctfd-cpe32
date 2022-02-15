import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserScoresUncheckedCreateNestedManyWithoutChallengesInput } from '../user-scores/user-scores-unchecked-create-nested-many-without-challenges.input';
import { MultipleQuestionsUncheckedCreateNestedManyWithoutChallengesInput } from '../multiple-questions/multiple-questions-unchecked-create-nested-many-without-challenges.input';
import { ShortAnswerQuestionsUncheckedCreateNestedManyWithoutChallengesInput } from '../short-answer-questions/short-answer-questions-unchecked-create-nested-many-without-challenges.input';
import { FlagQuestionsUncheckedCreateNestedManyWithoutChallengesInput } from '../flag-questions/flag-questions-unchecked-create-nested-many-without-challenges.input';

@InputType()
export class ChallengesUncheckedCreateWithoutCategoriesInput {

    @Field(() => String, {nullable:true})
    challenge_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    level_id!: string;

    @Field(() => String, {nullable:false})
    types_id!: string;

    @Field(() => String, {nullable:false})
    award_badge!: string;

    @Field(() => Int, {nullable:true})
    scorce?: number;

    @Field(() => Int, {nullable:true})
    max_time?: number;

    @Field(() => Int, {nullable:true})
    max_cost?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScoresUncheckedCreateNestedManyWithoutChallengesInput, {nullable:true})
    userScores?: UserScoresUncheckedCreateNestedManyWithoutChallengesInput;

    @Field(() => MultipleQuestionsUncheckedCreateNestedManyWithoutChallengesInput, {nullable:true})
    multipleQuestions?: MultipleQuestionsUncheckedCreateNestedManyWithoutChallengesInput;

    @Field(() => ShortAnswerQuestionsUncheckedCreateNestedManyWithoutChallengesInput, {nullable:true})
    shortAnswerQuestions?: ShortAnswerQuestionsUncheckedCreateNestedManyWithoutChallengesInput;

    @Field(() => FlagQuestionsUncheckedCreateNestedManyWithoutChallengesInput, {nullable:true})
    flagQuestions?: FlagQuestionsUncheckedCreateNestedManyWithoutChallengesInput;
}
