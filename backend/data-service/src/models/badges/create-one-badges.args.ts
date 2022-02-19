import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BadgesCreateInput } from './badges-create.input'

@ArgsType()
export class CreateOneBadgesArgs {
  @Field(() => BadgesCreateInput, { nullable: false })
  data!: BadgesCreateInput
}
