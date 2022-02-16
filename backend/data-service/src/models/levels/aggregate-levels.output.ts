import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LevelsCountAggregate } from './levels-count-aggregate.output'
import { LevelsMinAggregate } from './levels-min-aggregate.output'
import { LevelsMaxAggregate } from './levels-max-aggregate.output'

@ObjectType()
export class AggregateLevels {
  @Field(() => LevelsCountAggregate, { nullable: true })
  _count?: LevelsCountAggregate

  @Field(() => LevelsMinAggregate, { nullable: true })
  _min?: LevelsMinAggregate

  @Field(() => LevelsMaxAggregate, { nullable: true })
  _max?: LevelsMaxAggregate
}
