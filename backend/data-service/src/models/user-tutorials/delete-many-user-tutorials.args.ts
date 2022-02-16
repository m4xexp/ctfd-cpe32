import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserTutorialsWhereInput } from './user-tutorials-where.input'

@ArgsType()
export class DeleteManyUserTutorialsArgs {
  @Field(() => UserTutorialsWhereInput, { nullable: true })
  where?: UserTutorialsWhereInput
}
