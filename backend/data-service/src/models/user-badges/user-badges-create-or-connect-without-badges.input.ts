import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'
import { UserBadgesCreateWithoutBadgesInput } from './user-badges-create-without-badges.input'

@InputType()
export class UserBadgesCreateOrConnectWithoutBadgesInput {
  @Field(() => UserBadgesWhereUniqueInput, { nullable: false })
  where!: UserBadgesWhereUniqueInput

  @Field(() => UserBadgesCreateWithoutBadgesInput, { nullable: false })
  create!: UserBadgesCreateWithoutBadgesInput
}
