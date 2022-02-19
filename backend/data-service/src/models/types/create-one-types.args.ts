import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TypesCreateInput } from './types-create.input'

@ArgsType()
export class CreateOneTypesArgs {
  @Field(() => TypesCreateInput, { nullable: false })
  data!: TypesCreateInput
}
