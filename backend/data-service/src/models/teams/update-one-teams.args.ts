import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamsUpdateInput } from './teams-update.input'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'

@ArgsType()
export class UpdateOneTeamsArgs {
  @Field(() => TeamsUpdateInput, { nullable: false })
  data!: TeamsUpdateInput

  @Field(() => TeamsWhereUniqueInput, { nullable: false })
  where!: TeamsWhereUniqueInput
}
