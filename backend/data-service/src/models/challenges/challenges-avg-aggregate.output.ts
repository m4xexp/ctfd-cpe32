import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ChallengesAvgAggregate {

    @Field(() => Float, {nullable:true})
    scorce?: number;

    @Field(() => Float, {nullable:true})
    max_time?: number;

    @Field(() => Float, {nullable:true})
    max_cost?: number;
}
