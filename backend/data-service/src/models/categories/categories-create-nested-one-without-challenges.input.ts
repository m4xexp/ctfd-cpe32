import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CategoriesCreateWithoutChallengesInput } from './categories-create-without-challenges.input'
import { CategoriesCreateOrConnectWithoutChallengesInput } from './categories-create-or-connect-without-challenges.input'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'

@InputType()
export class CategoriesCreateNestedOneWithoutChallengesInput {
  @Field(() => CategoriesCreateWithoutChallengesInput, { nullable: true })
  create?: CategoriesCreateWithoutChallengesInput

  @Field(() => CategoriesCreateOrConnectWithoutChallengesInput, {
    nullable: true,
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutChallengesInput

  @Field(() => CategoriesWhereUniqueInput, { nullable: true })
  connect?: CategoriesWhereUniqueInput
}
