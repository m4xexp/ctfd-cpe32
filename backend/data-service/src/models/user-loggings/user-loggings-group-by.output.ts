import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { UserLoggingsCountAggregate } from './user-loggings-count-aggregate.output'
import { UserLoggingsMinAggregate } from './user-loggings-min-aggregate.output'
import { UserLoggingsMaxAggregate } from './user-loggings-max-aggregate.output'

@ObjectType()
export class UserLoggingsGroupBy {
  @Field(() => String, { nullable: false })
  log_id!: string

  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => String, { nullable: false })
  action!: string

  @Field(() => String, { nullable: false })
  ip!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => UserLoggingsCountAggregate, { nullable: true })
  _count?: UserLoggingsCountAggregate

  @Field(() => UserLoggingsMinAggregate, { nullable: true })
  _min?: UserLoggingsMinAggregate

  @Field(() => UserLoggingsMaxAggregate, { nullable: true })
  _max?: UserLoggingsMaxAggregate
}
