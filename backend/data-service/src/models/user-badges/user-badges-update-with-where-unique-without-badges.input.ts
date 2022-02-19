import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input'
import { UserBadgesUpdateWithoutBadgesInput } from './user-badges-update-without-badges.input'

@InputType()
export class UserBadgesUpdateWithWhereUniqueWithoutBadgesInput {
  @Field(() => UserBadgesWhereUniqueInput, { nullable: false })
  where!: UserBadgesWhereUniqueInput

  @Field(() => UserBadgesUpdateWithoutBadgesInput, { nullable: false })
  data!: UserBadgesUpdateWithoutBadgesInput
}
