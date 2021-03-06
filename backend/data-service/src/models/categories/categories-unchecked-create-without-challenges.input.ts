import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresUncheckedCreateNestedManyWithoutCategoriesInput } from '../user-scores/user-scores-unchecked-create-nested-many-without-categories.input'

@InputType()
export class CategoriesUncheckedCreateWithoutChallengesInput {
  @Field(() => String, { nullable: true })
  categories_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UserScoresUncheckedCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  userScores?: UserScoresUncheckedCreateNestedManyWithoutCategoriesInput
}
