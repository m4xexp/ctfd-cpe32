import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TypesCreateWithoutChallengesInput } from './types-create-without-challenges.input'
import { TypesCreateOrConnectWithoutChallengesInput } from './types-create-or-connect-without-challenges.input'
import { TypesUpsertWithoutChallengesInput } from './types-upsert-without-challenges.input'
import { TypesWhereUniqueInput } from './types-where-unique.input'
import { TypesUpdateWithoutChallengesInput } from './types-update-without-challenges.input'

@InputType()
export class TypesUpdateOneRequiredWithoutChallengesInput {
  @Field(() => TypesCreateWithoutChallengesInput, { nullable: true })
  create?: TypesCreateWithoutChallengesInput

  @Field(() => TypesCreateOrConnectWithoutChallengesInput, { nullable: true })
  connectOrCreate?: TypesCreateOrConnectWithoutChallengesInput

  @Field(() => TypesUpsertWithoutChallengesInput, { nullable: true })
  upsert?: TypesUpsertWithoutChallengesInput

  @Field(() => TypesWhereUniqueInput, { nullable: true })
  connect?: TypesWhereUniqueInput

  @Field(() => TypesUpdateWithoutChallengesInput, { nullable: true })
  update?: TypesUpdateWithoutChallengesInput
}
