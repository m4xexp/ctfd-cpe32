import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventsWhereUniqueInput } from './events-where-unique.input'
import { EventsUpdateWithoutBadgesInput } from './events-update-without-badges.input'
import { EventsCreateWithoutBadgesInput } from './events-create-without-badges.input'

@InputType()
export class EventsUpsertWithWhereUniqueWithoutBadgesInput {
  @Field(() => EventsWhereUniqueInput, { nullable: false })
  where!: EventsWhereUniqueInput

  @Field(() => EventsUpdateWithoutBadgesInput, { nullable: false })
  update!: EventsUpdateWithoutBadgesInput

  @Field(() => EventsCreateWithoutBadgesInput, { nullable: false })
  create!: EventsCreateWithoutBadgesInput
}
