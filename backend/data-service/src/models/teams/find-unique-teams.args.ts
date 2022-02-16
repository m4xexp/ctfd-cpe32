import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'

@ArgsType()
export class FindUniqueTeamsArgs {
  @Field(() => TeamsWhereUniqueInput, { nullable: false })
  where!: TeamsWhereUniqueInput
}
