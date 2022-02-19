import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventsCreateWithoutBadgesInput } from './events-create-without-badges.input'
import { EventsCreateOrConnectWithoutBadgesInput } from './events-create-or-connect-without-badges.input'
import { EventsUpsertWithWhereUniqueWithoutBadgesInput } from './events-upsert-with-where-unique-without-badges.input'
import { EventsCreateManyBadgesInputEnvelope } from './events-create-many-badges-input-envelope.input'
import { EventsWhereUniqueInput } from './events-where-unique.input'
import { EventsUpdateWithWhereUniqueWithoutBadgesInput } from './events-update-with-where-unique-without-badges.input'
import { EventsUpdateManyWithWhereWithoutBadgesInput } from './events-update-many-with-where-without-badges.input'
import { EventsScalarWhereInput } from './events-scalar-where.input'

@InputType()
export class EventsUpdateManyWithoutBadgesInput {
  @Field(() => [EventsCreateWithoutBadgesInput], { nullable: true })
  create?: Array<EventsCreateWithoutBadgesInput>

  @Field(() => [EventsCreateOrConnectWithoutBadgesInput], { nullable: true })
  connectOrCreate?: Array<EventsCreateOrConnectWithoutBadgesInput>

  @Field(() => [EventsUpsertWithWhereUniqueWithoutBadgesInput], {
    nullable: true,
  })
  upsert?: Array<EventsUpsertWithWhereUniqueWithoutBadgesInput>

  @Field(() => EventsCreateManyBadgesInputEnvelope, { nullable: true })
  createMany?: EventsCreateManyBadgesInputEnvelope

  @Field(() => [EventsWhereUniqueInput], { nullable: true })
  set?: Array<EventsWhereUniqueInput>

  @Field(() => [EventsWhereUniqueInput], { nullable: true })
  disconnect?: Array<EventsWhereUniqueInput>

  @Field(() => [EventsWhereUniqueInput], { nullable: true })
  delete?: Array<EventsWhereUniqueInput>

  @Field(() => [EventsWhereUniqueInput], { nullable: true })
  connect?: Array<EventsWhereUniqueInput>

  @Field(() => [EventsUpdateWithWhereUniqueWithoutBadgesInput], {
    nullable: true,
  })
  update?: Array<EventsUpdateWithWhereUniqueWithoutBadgesInput>

  @Field(() => [EventsUpdateManyWithWhereWithoutBadgesInput], {
    nullable: true,
  })
  updateMany?: Array<EventsUpdateManyWithWhereWithoutBadgesInput>

  @Field(() => [EventsScalarWhereInput], { nullable: true })
  deleteMany?: Array<EventsScalarWhereInput>
}
