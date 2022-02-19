import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input'
import { UserTutorialsCreateWithoutUsersInput } from './user-tutorials-create-without-users.input'

@InputType()
export class UserTutorialsCreateOrConnectWithoutUsersInput {
  @Field(() => UserTutorialsWhereUniqueInput, { nullable: false })
  where!: UserTutorialsWhereUniqueInput

  @Field(() => UserTutorialsCreateWithoutUsersInput, { nullable: false })
  create!: UserTutorialsCreateWithoutUsersInput
}
