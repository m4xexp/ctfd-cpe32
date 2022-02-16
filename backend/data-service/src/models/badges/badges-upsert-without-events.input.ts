import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesUpdateWithoutEventsInput } from './badges-update-without-events.input'
import { BadgesCreateWithoutEventsInput } from './badges-create-without-events.input'

@InputType()
export class BadgesUpsertWithoutEventsInput {
  @Field(() => BadgesUpdateWithoutEventsInput, { nullable: false })
  update!: BadgesUpdateWithoutEventsInput

  @Field(() => BadgesCreateWithoutEventsInput, { nullable: false })
  create!: BadgesCreateWithoutEventsInput
}
