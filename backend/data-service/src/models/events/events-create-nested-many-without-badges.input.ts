import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventsCreateWithoutBadgesInput } from './events-create-without-badges.input'
import { EventsCreateOrConnectWithoutBadgesInput } from './events-create-or-connect-without-badges.input'
import { EventsCreateManyBadgesInputEnvelope } from './events-create-many-badges-input-envelope.input'
import { EventsWhereUniqueInput } from './events-where-unique.input'

@InputType()
export class EventsCreateNestedManyWithoutBadgesInput {
  @Field(() => [EventsCreateWithoutBadgesInput], { nullable: true })
  create?: Array<EventsCreateWithoutBadgesInput>

  @Field(() => [EventsCreateOrConnectWithoutBadgesInput], { nullable: true })
  connectOrCreate?: Array<EventsCreateOrConnectWithoutBadgesInput>

  @Field(() => EventsCreateManyBadgesInputEnvelope, { nullable: true })
  createMany?: EventsCreateManyBadgesInputEnvelope

  @Field(() => [EventsWhereUniqueInput], { nullable: true })
  connect?: Array<EventsWhereUniqueInput>
}
