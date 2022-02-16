import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CategoriesWhereUniqueInput {
  @Field(() => String, { nullable: true })
  categories_id?: string
}
