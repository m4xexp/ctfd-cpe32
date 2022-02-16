import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'

@ArgsType()
export class FindUniqueUserBadgesArgs {
  @Field(() => UserBadgesWhereUniqueInput, { nullable: false })
  where!: UserBadgesWhereUniqueInput
}
