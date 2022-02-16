import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TeamsWhereInput } from './teams-where.input'
import { TeamsOrderByWithRelationInput } from './teams-order-by-with-relation.input'
import { TeamsWhereUniqueInput } from './teams-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TeamsScalarFieldEnum } from './teams-scalar-field.enum'

@ArgsType()
export class FindFirstTeamsArgs {
  @Field(() => TeamsWhereInput, { nullable: true })
  where?: TeamsWhereInput

  @Field(() => [TeamsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TeamsOrderByWithRelationInput>

  @Field(() => TeamsWhereUniqueInput, { nullable: true })
  cursor?: TeamsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [TeamsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TeamsScalarFieldEnum>
}
