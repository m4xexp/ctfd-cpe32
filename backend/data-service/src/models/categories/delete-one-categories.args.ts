import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CategoriesWhereUniqueInput } from './categories-where-unique.input'

@ArgsType()
export class DeleteOneCategoriesArgs {
  @Field(() => CategoriesWhereUniqueInput, { nullable: false })
  where!: CategoriesWhereUniqueInput
}
