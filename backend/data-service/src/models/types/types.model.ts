import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserScores } from '../user-scores/user-scores.model';
import { Challenges } from '../challenges/challenges.model';
import { TypesCount } from './types-count.output';

@ObjectType()
export class Types {

    @Field(() => ID, {nullable:false})
    types_id!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [UserScores], {nullable:true})
    userScores?: Array<UserScores>;

    @Field(() => [Challenges], {nullable:true})
    challenges?: Array<Challenges>;

    @Field(() => TypesCount, {nullable:false})
    _count?: TypesCount;
}
