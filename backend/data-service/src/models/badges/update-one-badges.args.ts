import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BadgesUpdateInput } from './badges-update.input'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'

@ArgsType()
export class UpdateOneBadgesArgs {
  @Field(() => BadgesUpdateInput, { nullable: false })
  data!: BadgesUpdateInput

  @Field(() => BadgesWhereUniqueInput, { nullable: false })
  where!: BadgesWhereUniqueInput
}
