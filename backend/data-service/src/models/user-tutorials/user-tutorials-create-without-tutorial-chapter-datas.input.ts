import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UsersCreateNestedOneWithoutUserTutorialsInput } from '../users/users-create-nested-one-without-user-tutorials.input'

@InputType()
export class UserTutorialsCreateWithoutTutorialChapterDatasInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UsersCreateNestedOneWithoutUserTutorialsInput, {
    nullable: false,
  })
  users!: UsersCreateNestedOneWithoutUserTutorialsInput
}
