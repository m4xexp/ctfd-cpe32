import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'
import { CategoriesCreateWithoutUserScoresInput } from './categories-create-without-user-scores.input'

@InputType()
export class CategoriesCreateOrConnectWithoutUserScoresInput {
  @Field(() => CategoriesWhereUniqueInput, { nullable: false })
  where!: CategoriesWhereUniqueInput

  @Field(() => CategoriesCreateWithoutUserScoresInput, { nullable: false })
  create!: CategoriesCreateWithoutUserScoresInput
}
