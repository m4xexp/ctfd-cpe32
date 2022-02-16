import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CategoriesCreateWithoutChallengesInput } from './categories-create-without-challenges.input'
import { CategoriesCreateOrConnectWithoutChallengesInput } from './categories-create-or-connect-without-challenges.input'
import { CategoriesUpsertWithoutChallengesInput } from './categories-upsert-without-challenges.input'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'
import { CategoriesUpdateWithoutChallengesInput } from './categories-update-without-challenges.input'

@InputType()
export class CategoriesUpdateOneRequiredWithoutChallengesInput {
  @Field(() => CategoriesCreateWithoutChallengesInput, { nullable: true })
  create?: CategoriesCreateWithoutChallengesInput

  @Field(() => CategoriesCreateOrConnectWithoutChallengesInput, {
    nullable: true,
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutChallengesInput

  @Field(() => CategoriesUpsertWithoutChallengesInput, { nullable: true })
  upsert?: CategoriesUpsertWithoutChallengesInput

  @Field(() => CategoriesWhereUniqueInput, { nullable: true })
  connect?: CategoriesWhereUniqueInput

  @Field(() => CategoriesUpdateWithoutChallengesInput, { nullable: true })
  update?: CategoriesUpdateWithoutChallengesInput
}
