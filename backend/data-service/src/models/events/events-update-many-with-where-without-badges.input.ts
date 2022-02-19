import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventsScalarWhereInput } from './events-scalar-where.input'
import { EventsUpdateManyMutationInput } from './events-update-many-mutation.input'

@InputType()
export class EventsUpdateManyWithWhereWithoutBadgesInput {
  @Field(() => EventsScalarWhereInput, { nullable: false })
  where!: EventsScalarWhereInput

  @Field(() => EventsUpdateManyMutationInput, { nullable: false })
  data!: EventsUpdateManyMutationInput
}
