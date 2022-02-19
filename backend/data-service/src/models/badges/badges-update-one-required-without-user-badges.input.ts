import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesCreateWithoutUserBadgesInput } from './badges-create-without-user-badges.input'
import { BadgesCreateOrConnectWithoutUserBadgesInput } from './badges-create-or-connect-without-user-badges.input'
import { BadgesUpsertWithoutUserBadgesInput } from './badges-upsert-without-user-badges.input'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'
import { BadgesUpdateWithoutUserBadgesInput } from './badges-update-without-user-badges.input'

@InputType()
export class BadgesUpdateOneRequiredWithoutUserBadgesInput {
  @Field(() => BadgesCreateWithoutUserBadgesInput, { nullable: true })
  create?: BadgesCreateWithoutUserBadgesInput

  @Field(() => BadgesCreateOrConnectWithoutUserBadgesInput, { nullable: true })
  connectOrCreate?: BadgesCreateOrConnectWithoutUserBadgesInput

  @Field(() => BadgesUpsertWithoutUserBadgesInput, { nullable: true })
  upsert?: BadgesUpsertWithoutUserBadgesInput

  @Field(() => BadgesWhereUniqueInput, { nullable: true })
  connect?: BadgesWhereUniqueInput

  @Field(() => BadgesUpdateWithoutUserBadgesInput, { nullable: true })
  update?: BadgesUpdateWithoutUserBadgesInput
}
