import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CategoriesCreateWithoutUserScoresInput } from './categories-create-without-user-scores.input'
import { CategoriesCreateOrConnectWithoutUserScoresInput } from './categories-create-or-connect-without-user-scores.input'
import { CategoriesUpsertWithoutUserScoresInput } from './categories-upsert-without-user-scores.input'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'
import { CategoriesUpdateWithoutUserScoresInput } from './categories-update-without-user-scores.input'

@InputType()
export class CategoriesUpdateOneRequiredWithoutUserScoresInput {
  @Field(() => CategoriesCreateWithoutUserScoresInput, { nullable: true })
  create?: CategoriesCreateWithoutUserScoresInput

  @Field(() => CategoriesCreateOrConnectWithoutUserScoresInput, {
    nullable: true,
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutUserScoresInput

  @Field(() => CategoriesUpsertWithoutUserScoresInput, { nullable: true })
  upsert?: CategoriesUpsertWithoutUserScoresInput

  @Field(() => CategoriesWhereUniqueInput, { nullable: true })
  connect?: CategoriesWhereUniqueInput

  @Field(() => CategoriesUpdateWithoutUserScoresInput, { nullable: true })
  update?: CategoriesUpdateWithoutUserScoresInput
}
