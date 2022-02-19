import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserBadgesWhereInput } from './user-badges-where.input'

@ArgsType()
export class DeleteManyUserBadgesArgs {
  @Field(() => UserBadgesWhereInput, { nullable: true })
  where?: UserBadgesWhereInput
}
