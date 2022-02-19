import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BadgesUpdateManyMutationInput } from './badges-update-many-mutation.input'
import { BadgesWhereInput } from './badges-where.input'

@ArgsType()
export class UpdateManyBadgesArgs {
  @Field(() => BadgesUpdateManyMutationInput, { nullable: false })
  data!: BadgesUpdateManyMutationInput

  @Field(() => BadgesWhereInput, { nullable: true })
  where?: BadgesWhereInput
}
