import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { UserLoggingsCountAggregate } from './user-loggings-count-aggregate.output'
import { UserLoggingsMinAggregate } from './user-loggings-min-aggregate.output'
import { UserLoggingsMaxAggregate } from './user-loggings-max-aggregate.output'

@ObjectType()
export class AggregateUserLoggings {
  @Field(() => UserLoggingsCountAggregate, { nullable: true })
  _count?: UserLoggingsCountAggregate

  @Field(() => UserLoggingsMinAggregate, { nullable: true })
  _min?: UserLoggingsMinAggregate

  @Field(() => UserLoggingsMaxAggregate, { nullable: true })
  _max?: UserLoggingsMaxAggregate
}
