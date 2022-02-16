import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'

@ArgsType()
export class DeleteOneUserBadgesArgs {
  @Field(() => UserBadgesWhereUniqueInput, { nullable: false })
  where!: UserBadgesWhereUniqueInput
}
