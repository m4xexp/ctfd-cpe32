import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCount {

    @Field(() => Int, {nullable:false})
    userLoggings!: number;

    @Field(() => Int, {nullable:false})
    userBadges!: number;

    @Field(() => Int, {nullable:false})
    teamMembers!: number;

    @Field(() => Int, {nullable:false})
    userTutorials!: number;

    @Field(() => Int, {nullable:false})
    userScores!: number;
}
