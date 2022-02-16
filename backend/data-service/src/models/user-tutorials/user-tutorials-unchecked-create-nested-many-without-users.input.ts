import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserTutorialsCreateWithoutUsersInput } from './user-tutorials-create-without-users.input'
import { UserTutorialsCreateOrConnectWithoutUsersInput } from './user-tutorials-create-or-connect-without-users.input'
import { UserTutorialsCreateManyUsersInputEnvelope } from './user-tutorials-create-many-users-input-envelope.input'
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input'

@InputType()
export class UserTutorialsUncheckedCreateNestedManyWithoutUsersInput {
  @Field(() => [UserTutorialsCreateWithoutUsersInput], { nullable: true })
  create?: Array<UserTutorialsCreateWithoutUsersInput>

  @Field(() => [UserTutorialsCreateOrConnectWithoutUsersInput], {
    nullable: true,
  })
  connectOrCreate?: Array<UserTutorialsCreateOrConnectWithoutUsersInput>

  @Field(() => UserTutorialsCreateManyUsersInputEnvelope, { nullable: true })
  createMany?: UserTutorialsCreateManyUsersInputEnvelope

  @Field(() => [UserTutorialsWhereUniqueInput], { nullable: true })
  connect?: Array<UserTutorialsWhereUniqueInput>
}
