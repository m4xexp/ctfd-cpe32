import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UserLoggingsUpdateInput } from './user-loggings-update.input'
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input'

@ArgsType()
export class UpdateOneUserLoggingsArgs {
  @Field(() => UserLoggingsUpdateInput, { nullable: false })
  data!: UserLoggingsUpdateInput

  @Field(() => UserLoggingsWhereUniqueInput, { nullable: false })
  where!: UserLoggingsWhereUniqueInput
}
