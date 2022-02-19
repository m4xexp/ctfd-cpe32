import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesUpdateInput } from './user-badges-update.input'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'

@ArgsType()
export class UpdateOneUserBadgesArgs {
  @Field(() => UserBadgesUpdateInput, { nullable: false })
  data!: UserBadgesUpdateInput

  @Field(() => UserBadgesWhereUniqueInput, { nullable: false })
  where!: UserBadgesWhereUniqueInput
}
