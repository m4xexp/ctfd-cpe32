import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input'
import { ChallengesCreateWithoutCategoriesInput } from './challenges-create-without-categories.input'

@InputType()
export class ChallengesCreateOrConnectWithoutCategoriesInput {
  @Field(() => ChallengesWhereUniqueInput, { nullable: false })
  where!: ChallengesWhereUniqueInput

  @Field(() => ChallengesCreateWithoutCategoriesInput, { nullable: false })
  create!: ChallengesCreateWithoutCategoriesInput
}
