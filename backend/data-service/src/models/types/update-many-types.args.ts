import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TypesUpdateManyMutationInput } from './types-update-many-mutation.input'
import { TypesWhereInput } from './types-where.input'

@ArgsType()
export class UpdateManyTypesArgs {
  @Field(() => TypesUpdateManyMutationInput, { nullable: false })
  data!: TypesUpdateManyMutationInput

  @Field(() => TypesWhereInput, { nullable: true })
  where?: TypesWhereInput
}
