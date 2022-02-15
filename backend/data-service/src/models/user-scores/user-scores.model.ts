import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users } from '../users/users.model';
import { Challenges } from '../challenges/challenges.model';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Levels } from '../levels/levels.model';
import { Types } from '../types/types.model';
import { Categories } from '../categories/categories.model';

@ObjectType()
export class UserScores {

    @Field(() => Users, {nullable:false})
    users?: Users;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Challenges, {nullable:false})
    challenges?: Challenges;

    @Field(() => String, {nullable:false})
    challenge_id!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    base_score!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    time_score!: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
