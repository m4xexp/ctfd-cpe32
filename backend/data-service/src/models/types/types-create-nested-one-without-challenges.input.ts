import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TypesCreateWithoutChallengesInput } from './types-create-without-challenges.input'
import { TypesCreateOrConnectWithoutChallengesInput } from './types-create-or-connect-without-challenges.input'
import { TypesWhereUniqueInput } from './types-where-unique.input'

@InputType()
export class TypesCreateNestedOneWithoutChallengesInput {
  @Field(() => TypesCreateWithoutChallengesInput, { nullable: true })
  create?: TypesCreateWithoutChallengesInput

  @Field(() => TypesCreateOrConnectWithoutChallengesInput, { nullable: true })
  connectOrCreate?: TypesCreateOrConnectWithoutChallengesInput

  @Field(() => TypesWhereUniqueInput, { nullable: true })
  connect?: TypesWhereUniqueInput
}
