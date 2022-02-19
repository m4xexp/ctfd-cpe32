import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesUpdateWithoutUserBadgesInput } from './badges-update-without-user-badges.input'
import { BadgesCreateWithoutUserBadgesInput } from './badges-create-without-user-badges.input'

@InputType()
export class BadgesUpsertWithoutUserBadgesInput {
  @Field(() => BadgesUpdateWithoutUserBadgesInput, { nullable: false })
  update!: BadgesUpdateWithoutUserBadgesInput

  @Field(() => BadgesCreateWithoutUserBadgesInput, { nullable: false })
  create!: BadgesCreateWithoutUserBadgesInput
}
