import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BadgesCreateWithoutChallengesInput } from './badges-create-without-challenges.input'
import { BadgesCreateOrConnectWithoutChallengesInput } from './badges-create-or-connect-without-challenges.input'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'

@InputType()
export class BadgesCreateNestedOneWithoutChallengesInput {
  @Field(() => BadgesCreateWithoutChallengesInput, { nullable: true })
  create?: BadgesCreateWithoutChallengesInput

  @Field(() => BadgesCreateOrConnectWithoutChallengesInput, { nullable: true })
  connectOrCreate?: BadgesCreateOrConnectWithoutChallengesInput

  @Field(() => BadgesWhereUniqueInput, { nullable: true })
  connect?: BadgesWhereUniqueInput
}
