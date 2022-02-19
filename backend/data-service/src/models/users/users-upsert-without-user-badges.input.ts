import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersUpdateWithoutUserBadgesInput } from './users-update-without-user-badges.input'
import { UsersCreateWithoutUserBadgesInput } from './users-create-without-user-badges.input'

@InputType()
export class UsersUpsertWithoutUserBadgesInput {
  @Field(() => UsersUpdateWithoutUserBadgesInput, { nullable: false })
  update!: UsersUpdateWithoutUserBadgesInput

  @Field(() => UsersCreateWithoutUserBadgesInput, { nullable: false })
  create!: UsersCreateWithoutUserBadgesInput
}
