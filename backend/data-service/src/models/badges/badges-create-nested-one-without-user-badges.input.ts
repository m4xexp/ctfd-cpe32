import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesCreateWithoutUserBadgesInput } from './badges-create-without-user-badges.input'
import { BadgesCreateOrConnectWithoutUserBadgesInput } from './badges-create-or-connect-without-user-badges.input'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'

@InputType()
export class BadgesCreateNestedOneWithoutUserBadgesInput {
  @Field(() => BadgesCreateWithoutUserBadgesInput, { nullable: true })
  create?: BadgesCreateWithoutUserBadgesInput

  @Field(() => BadgesCreateOrConnectWithoutUserBadgesInput, { nullable: true })
  connectOrCreate?: BadgesCreateOrConnectWithoutUserBadgesInput

  @Field(() => BadgesWhereUniqueInput, { nullable: true })
  connect?: BadgesWhereUniqueInput
}
