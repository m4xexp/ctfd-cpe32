import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesCreateWithoutEventsInput } from './badges-create-without-events.input'
import { BadgesCreateOrConnectWithoutEventsInput } from './badges-create-or-connect-without-events.input'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'

@InputType()
export class BadgesCreateNestedOneWithoutEventsInput {
  @Field(() => BadgesCreateWithoutEventsInput, { nullable: true })
  create?: BadgesCreateWithoutEventsInput

  @Field(() => BadgesCreateOrConnectWithoutEventsInput, { nullable: true })
  connectOrCreate?: BadgesCreateOrConnectWithoutEventsInput

  @Field(() => BadgesWhereUniqueInput, { nullable: true })
  connect?: BadgesWhereUniqueInput
}
