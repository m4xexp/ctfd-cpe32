import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersUpdateWithoutUserTutorialsInput } from './users-update-without-user-tutorials.input'
import { UsersCreateWithoutUserTutorialsInput } from './users-create-without-user-tutorials.input'

@InputType()
export class UsersUpsertWithoutUserTutorialsInput {
  @Field(() => UsersUpdateWithoutUserTutorialsInput, { nullable: false })
  update!: UsersUpdateWithoutUserTutorialsInput

  @Field(() => UsersCreateWithoutUserTutorialsInput, { nullable: false })
  create!: UsersCreateWithoutUserTutorialsInput
}
