import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersWhereUniqueInput } from './users-where-unique.input'
import { UsersCreateWithoutUserTutorialsInput } from './users-create-without-user-tutorials.input'

@InputType()
export class UsersCreateOrConnectWithoutUserTutorialsInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  where!: UsersWhereUniqueInput

  @Field(() => UsersCreateWithoutUserTutorialsInput, { nullable: false })
  create!: UsersCreateWithoutUserTutorialsInput
}
