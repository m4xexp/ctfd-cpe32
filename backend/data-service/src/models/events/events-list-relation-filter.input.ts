import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventsWhereInput } from './events-where.input'

@InputType()
export class EventsListRelationFilter {
  @Field(() => EventsWhereInput, { nullable: true })
  every?: EventsWhereInput

  @Field(() => EventsWhereInput, { nullable: true })
  some?: EventsWhereInput

  @Field(() => EventsWhereInput, { nullable: true })
  none?: EventsWhereInput
}
