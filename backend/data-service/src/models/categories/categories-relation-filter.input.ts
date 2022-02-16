import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { CategoriesWhereInput } from './categories-where.input'

@InputType()
export class CategoriesRelationFilter {
  @Field(() => CategoriesWhereInput, { nullable: true })
  is?: CategoriesWhereInput

  @Field(() => CategoriesWhereInput, { nullable: true })
  isNot?: CategoriesWhereInput
}
