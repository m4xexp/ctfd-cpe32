import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChallengesCountAggregate } from './challenges-count-aggregate.output';
import { ChallengesAvgAggregate } from './challenges-avg-aggregate.output';
import { ChallengesSumAggregate } from './challenges-sum-aggregate.output';
import { ChallengesMinAggregate } from './challenges-min-aggregate.output';
import { ChallengesMaxAggregate } from './challenges-max-aggregate.output';

@ObjectType()
export class ChallengesGroupBy {

    @Field(() => String, {nullable:false})
    challenge_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    level_id!: string;

    @Field(() => String, {nullable:false})
    types_id!: string;

    @Field(() => String, {nullable:false})
    categories_id!: string;

    @Field(() => String, {nullable:false})
    award_badge!: string;

    @Field(() => Int, {nullable:false})
    scorce!: number;

    @Field(() => Int, {nullable:false})
    max_time!: number;

    @Field(() => Int, {nullable:false})
    max_cost!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ChallengesCountAggregate, {nullable:true})
    _count?: ChallengesCountAggregate;

    @Field(() => ChallengesAvgAggregate, {nullable:true})
    _avg?: ChallengesAvgAggregate;

    @Field(() => ChallengesSumAggregate, {nullable:true})
    _sum?: ChallengesSumAggregate;

    @Field(() => ChallengesMinAggregate, {nullable:true})
    _min?: ChallengesMinAggregate;

    @Field(() => ChallengesMaxAggregate, {nullable:true})
    _max?: ChallengesMaxAggregate;
}
