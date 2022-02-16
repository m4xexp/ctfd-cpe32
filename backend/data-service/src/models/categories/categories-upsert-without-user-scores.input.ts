import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CategoriesUpdateWithoutUserScoresInput } from './categories-update-without-user-scores.input'
import { CategoriesCreateWithoutUserScoresInput } from './categories-create-without-user-scores.input'

@InputType()
export class CategoriesUpsertWithoutUserScoresInput {
  @Field(() => CategoriesUpdateWithoutUserScoresInput, { nullable: false })
  update!: CategoriesUpdateWithoutUserScoresInput

  @Field(() => CategoriesCreateWithoutUserScoresInput, { nullable: false })
  create!: CategoriesCreateWithoutUserScoresInput
}
