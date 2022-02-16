import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersCreateWithoutUserTutorialsInput } from './users-create-without-user-tutorials.input'
import { UsersCreateOrConnectWithoutUserTutorialsInput } from './users-create-or-connect-without-user-tutorials.input'
import { UsersWhereUniqueInput } from './users-where-unique.input'

@InputType()
export class UsersCreateNestedOneWithoutUserTutorialsInput {
  @Field(() => UsersCreateWithoutUserTutorialsInput, { nullable: true })
  create?: UsersCreateWithoutUserTutorialsInput

  @Field(() => UsersCreateOrConnectWithoutUserTutorialsInput, {
    nullable: true,
  })
  connectOrCreate?: UsersCreateOrConnectWithoutUserTutorialsInput

  @Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput
}
