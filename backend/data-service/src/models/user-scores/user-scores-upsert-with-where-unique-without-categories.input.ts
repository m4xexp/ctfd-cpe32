import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresUpdateWithoutCategoriesInput } from './user-scores-update-without-categories.input'
import { UserScoresCreateWithoutCategoriesInput } from './user-scores-create-without-categories.input'

@InputType()
export class UserScoresUpsertWithWhereUniqueWithoutCategoriesInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresUpdateWithoutCategoriesInput, { nullable: false })
  update!: UserScoresUpdateWithoutCategoriesInput

  @Field(() => UserScoresCreateWithoutCategoriesInput, { nullable: false })
  create!: UserScoresCreateWithoutCategoriesInput
}
