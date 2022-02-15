import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserScoresCountAggregate } from './user-scores-count-aggregate.output';
import { UserScoresAvgAggregate } from './user-scores-avg-aggregate.output';
import { UserScoresSumAggregate } from './user-scores-sum-aggregate.output';
import { UserScoresMinAggregate } from './user-scores-min-aggregate.output';
import { UserScoresMaxAggregate } from './user-scores-max-aggregate.output';

@ObjectType()
export class AggregateUserScores {

    @Field(() => UserScoresCountAggregate, {nullable:true})
    _count?: UserScoresCountAggregate;

    @Field(() => UserScoresAvgAggregate, {nullable:true})
    _avg?: UserScoresAvgAggregate;

    @Field(() => UserScoresSumAggregate, {nullable:true})
    _sum?: UserScoresSumAggregate;

    @Field(() => UserScoresMinAggregate, {nullable:true})
    _min?: UserScoresMinAggregate;

    @Field(() => UserScoresMaxAggregate, {nullable:true})
    _max?: UserScoresMaxAggregate;
}
