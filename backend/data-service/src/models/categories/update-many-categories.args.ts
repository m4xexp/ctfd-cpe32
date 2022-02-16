import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { CategoriesUpdateManyMutationInput } from './categories-update-many-mutation.input'
import { CategoriesWhereInput } from './categories-where.input'

@ArgsType()
export class UpdateManyCategoriesArgs {
  @Field(() => CategoriesUpdateManyMutationInput, { nullable: false })
  data!: CategoriesUpdateManyMutationInput

  @Field(() => CategoriesWhereInput, { nullable: true })
  where?: CategoriesWhereInput
}
