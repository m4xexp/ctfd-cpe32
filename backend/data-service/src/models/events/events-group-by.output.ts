import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { EventsCountAggregate } from './events-count-aggregate.output'
import { EventsMinAggregate } from './events-min-aggregate.output'
import { EventsMaxAggregate } from './events-max-aggregate.output'

@ObjectType()
export class EventsGroupBy {
  @Field(() => String, { nullable: false })
  event_id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  evnet_description!: string

  @Field(() => String, { nullable: false })
  award_badge!: string

  @Field(() => String, { nullable: false })
  flag_link!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => String, { nullable: false })
  question!: string

  @Field(() => String, { nullable: false })
  answer!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => EventsCountAggregate, { nullable: true })
  _count?: EventsCountAggregate

  @Field(() => EventsMinAggregate, { nullable: true })
  _min?: EventsMinAggregate

  @Field(() => EventsMaxAggregate, { nullable: true })
  _max?: EventsMaxAggregate
}
