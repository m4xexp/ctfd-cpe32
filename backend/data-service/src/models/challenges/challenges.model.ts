import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Levels } from '../levels/levels.model';
import { Types } from '../types/types.model';
import { Categories } from '../categories/categories.model';
import { Badges } from '../badges/badges.model';
import { Int } from '@nestjs/graphql';
import { UserScores } from '../user-scores/user-scores.model';
import { MultipleQuestions } from '../multiple-questions/multiple-questions.model';
import { ShortAnswerQuestions } from '../short-answer-questions/short-answer-questions.model';
import { FlagQuestions } from '../flag-questions/flag-questions.model';
import { ChallengesCount } from './challenges-count.output';

@ObjectType()
export class Challenges {

    @Field(() => ID, {nullable:false})
    challenge_id!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    name!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    question!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    description!: string;

    @Field(() => Levels, {nullable:false})
    levels?: Levels;

    @Field(() => String, {nullable:false})
    level_id!: string;

    @Field(() => Types, {nullable:false})
    types?: Types;

    @Field(() => String, {nullable:false})
    types_id!: string;

    @Field(() => Categories, {nullable:false})
    categories?: Categories;

    @Field(() => String, {nullable:false})
    categories_id!: string;

    @Field(() => Badges, {nullable:false})
    badges?: Badges;

    @Field(() => String, {nullable:false})
    award_badge!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    scorce!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    max_time!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    max_cost!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserScores], {nullable:true})
    userScores?: Array<UserScores>;

    @Field(() => [MultipleQuestions], {nullable:true})
    multipleQuestions?: Array<MultipleQuestions>;

    @Field(() => [ShortAnswerQuestions], {nullable:true})
    shortAnswerQuestions?: Array<ShortAnswerQuestions>;

    @Field(() => [FlagQuestions], {nullable:true})
    flagQuestions?: Array<FlagQuestions>;

    @Field(() => ChallengesCount, {nullable:false})
    _count?: ChallengesCount;
}
