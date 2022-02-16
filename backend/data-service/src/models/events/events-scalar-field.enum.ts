import { registerEnumType } from '@nestjs/graphql'

export enum EventsScalarFieldEnum {
  event_id = 'event_id',
  name = 'name',
  evnet_description = 'evnet_description',
  award_badge = 'award_badge',
  flag_link = 'flag_link',
  description = 'description',
  question = 'question',
  answer = 'answer',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventsScalarFieldEnum, {
  name: 'EventsScalarFieldEnum',
  description: undefined,
})
