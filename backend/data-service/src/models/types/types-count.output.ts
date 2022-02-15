import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TypesCount {

    @Field(() => Int, {nullable:false})
    userScores!: number;

    @Field(() => Int, {nullable:false})
    challenges!: number;
}
