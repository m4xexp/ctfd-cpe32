import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BadgesCount {

    @Field(() => Int, {nullable:false})
    userBadges!: number;

    @Field(() => Int, {nullable:false})
    events!: number;

    @Field(() => Int, {nullable:false})
    challenges!: number;
}
