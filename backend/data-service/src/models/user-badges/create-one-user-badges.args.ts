import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesCreateInput } from './user-badges-create.input'

@ArgsType()
export class CreateOneUserBadgesArgs {
  @Field(() => UserBadgesCreateInput, { nullable: false })
  data!: UserBadgesCreateInput
}
