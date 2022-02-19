import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TeamsWhereInput } from './teams-where.input'

@InputType()
export class TeamsRelationFilter {
  @Field(() => TeamsWhereInput, { nullable: true })
  is?: TeamsWhereInput

  @Field(() => TeamsWhereInput, { nullable: true })
  isNot?: TeamsWhereInput
}
