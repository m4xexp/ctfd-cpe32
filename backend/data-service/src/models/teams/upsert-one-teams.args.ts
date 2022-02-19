import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'
import { TeamsCreateInput } from './teams-create.input'
import { TeamsUpdateInput } from './teams-update.input'

@ArgsType()
export class UpsertOneTeamsArgs {
  @Field(() => TeamsWhereUniqueInput, { nullable: false })
  where!: TeamsWhereUniqueInput

  @Field(() => TeamsCreateInput, { nullable: false })
  create!: TeamsCreateInput

  @Field(() => TeamsUpdateInput, { nullable: false })
  update!: TeamsUpdateInput
}
