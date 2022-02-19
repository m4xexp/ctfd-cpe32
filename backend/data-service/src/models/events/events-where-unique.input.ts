import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class EventsWhereUniqueInput {
  @Field(() => String, { nullable: true })
  event_id?: string
}
