import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserTutorialsWhereInput } from './user-tutorials-where.input'

@InputType()
export class UserTutorialsListRelationFilter {
  @Field(() => UserTutorialsWhereInput, { nullable: true })
  every?: UserTutorialsWhereInput

  @Field(() => UserTutorialsWhereInput, { nullable: true })
  some?: UserTutorialsWhereInput

  @Field(() => UserTutorialsWhereInput, { nullable: true })
  none?: UserTutorialsWhereInput
}
