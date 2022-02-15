import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserScoresAvgAggregate {

    @Field(() => Float, {nullable:true})
    base_score?: number;

    @Field(() => Float, {nullable:true})
    time_score?: number;
}
