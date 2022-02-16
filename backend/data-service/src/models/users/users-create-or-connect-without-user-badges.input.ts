import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersWhereUniqueInput } from './users-where-unique.input'
import { UsersCreateWithoutUserBadgesInput } from './users-create-without-user-badges.input'

@InputType()
export class UsersCreateOrConnectWithoutUserBadgesInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  where!: UsersWhereUniqueInput

  @Field(() => UsersCreateWithoutUserBadgesInput, { nullable: false })
  create!: UsersCreateWithoutUserBadgesInput
}
