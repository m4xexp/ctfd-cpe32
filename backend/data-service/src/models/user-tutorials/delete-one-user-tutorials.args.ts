import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input'

@ArgsType()
export class DeleteOneUserTutorialsArgs {
  @Field(() => UserTutorialsWhereUniqueInput, { nullable: false })
  where!: UserTutorialsWhereUniqueInput
}
