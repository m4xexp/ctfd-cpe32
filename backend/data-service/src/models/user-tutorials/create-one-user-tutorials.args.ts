import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserTutorialsCreateInput } from './user-tutorials-create.input'

@ArgsType()
export class CreateOneUserTutorialsArgs {
  @Field(() => UserTutorialsCreateInput, { nullable: false })
  data!: UserTutorialsCreateInput
}
