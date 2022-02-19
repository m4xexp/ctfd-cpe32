import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CategoriesUpdateInput } from './categories-update.input'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'

@ArgsType()
export class UpdateOneCategoriesArgs {
  @Field(() => CategoriesUpdateInput, { nullable: false })
  data!: CategoriesUpdateInput

  @Field(() => CategoriesWhereUniqueInput, { nullable: false })
  where!: CategoriesWhereUniqueInput
}
