import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input'
import { UserScoresCreateWithoutCategoriesInput } from './user-scores-create-without-categories.input'

@InputType()
export class UserScoresCreateOrConnectWithoutCategoriesInput {
  @Field(() => UserScoresWhereUniqueInput, { nullable: false })
  where!: UserScoresWhereUniqueInput

  @Field(() => UserScoresCreateWithoutCategoriesInput, { nullable: false })
  create!: UserScoresCreateWithoutCategoriesInput
}
