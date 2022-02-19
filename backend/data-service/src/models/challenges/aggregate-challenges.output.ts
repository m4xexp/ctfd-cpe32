import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ChallengesCountAggregate } from './challenges-count-aggregate.output'
import { ChallengesAvgAggregate } from './challenges-avg-aggregate.output'
import { ChallengesSumAggregate } from './challenges-sum-aggregate.output'
import { ChallengesMinAggregate } from './challenges-min-aggregate.output'
import { ChallengesMaxAggregate } from './challenges-max-aggregate.output'

@ObjectType()
export class AggregateChallenges {
  @Field(() => ChallengesCountAggregate, { nullable: true })
  _count?: ChallengesCountAggregate

  @Field(() => ChallengesAvgAggregate, { nullable: true })
  _avg?: ChallengesAvgAggregate

  @Field(() => ChallengesSumAggregate, { nullable: true })
  _sum?: ChallengesSumAggregate

  @Field(() => ChallengesMinAggregate, { nullable: true })
  _min?: ChallengesMinAggregate

  @Field(() => ChallengesMaxAggregate, { nullable: true })
  _max?: ChallengesMaxAggregate
}
