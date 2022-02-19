import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { BadgesWhereUniqueInput } from './badges-where-unique.input'

@ArgsType()
export class FindUniqueBadgesArgs {
  @Field(() => BadgesWhereUniqueInput, { nullable: false })
  where!: BadgesWhereUniqueInput
}
