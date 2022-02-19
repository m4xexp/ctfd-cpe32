import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserTutorialsUpdateInput } from './user-tutorials-update.input'
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input'

@ArgsType()
export class UpdateOneUserTutorialsArgs {
  @Field(() => UserTutorialsUpdateInput, { nullable: false })
  data!: UserTutorialsUpdateInput

  @Field(() => UserTutorialsWhereUniqueInput, { nullable: false })
  where!: UserTutorialsWhereUniqueInput
}
