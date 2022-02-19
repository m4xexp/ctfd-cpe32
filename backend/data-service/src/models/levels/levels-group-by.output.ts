import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LevelsCountAggregate } from './levels-count-aggregate.output'
import { LevelsMinAggregate } from './levels-min-aggregate.output'
import { LevelsMaxAggregate } from './levels-max-aggregate.output'

@ObjectType()
export class LevelsGroupBy {
  @Field(() => String, { nullable: false })
  level_id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => LevelsCountAggregate, { nullable: true })
  _count?: LevelsCountAggregate

  @Field(() => LevelsMinAggregate, { nullable: true })
  _min?: LevelsMinAggregate

  @Field(() => LevelsMaxAggregate, { nullable: true })
  _max?: LevelsMaxAggregate
}
