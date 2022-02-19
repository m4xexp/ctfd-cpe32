import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CategoriesCreateManyInput } from './categories-create-many.input'

@ArgsType()
export class CreateManyCategoriesArgs {
  @Field(() => [CategoriesCreateManyInput], { nullable: false })
  data!: Array<CategoriesCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
