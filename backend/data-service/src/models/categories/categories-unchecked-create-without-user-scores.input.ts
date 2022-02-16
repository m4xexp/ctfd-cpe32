import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ChallengesUncheckedCreateNestedManyWithoutCategoriesInput } from '../challenges/challenges-unchecked-create-nested-many-without-categories.input'

@InputType()
export class CategoriesUncheckedCreateWithoutUserScoresInput {
  @Field(() => String, { nullable: true })
  categories_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => ChallengesUncheckedCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  challenges?: ChallengesUncheckedCreateNestedManyWithoutCategoriesInput
}
