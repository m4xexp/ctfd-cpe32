import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesCreateNestedOneWithoutUserBadgesInput } from '../badges/badges-create-nested-one-without-user-badges.input'

@InputType()
export class UserBadgesCreateWithoutUsersInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => BadgesCreateNestedOneWithoutUserBadgesInput, { nullable: false })
  badges!: BadgesCreateNestedOneWithoutUserBadgesInput
}
