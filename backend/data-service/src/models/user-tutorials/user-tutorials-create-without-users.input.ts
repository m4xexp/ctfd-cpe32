import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateNestedOneWithoutUserTutorialsInput } from '../tutorial-chapter-datas/tutorial-chapter-datas-create-nested-one-without-user-tutorials.input'

@InputType()
export class UserTutorialsCreateWithoutUsersInput {
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => TutorialChapterDatasCreateNestedOneWithoutUserTutorialsInput, {
    nullable: false,
  })
  tutorialChapterDatas!: TutorialChapterDatasCreateNestedOneWithoutUserTutorialsInput
}
