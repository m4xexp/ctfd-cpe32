import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventsCreateManyBadgesInput } from './events-create-many-badges.input'

@InputType()
export class EventsCreateManyBadgesInputEnvelope {
  @Field(() => [EventsCreateManyBadgesInput], { nullable: false })
  data!: Array<EventsCreateManyBadgesInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
