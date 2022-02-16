import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateWithoutUserTutorialsInput } from './tutorial-chapter-datas-create-without-user-tutorials.input'
import { TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput } from './tutorial-chapter-datas-create-or-connect-without-user-tutorials.input'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'

@InputType()
export class TutorialChapterDatasCreateNestedOneWithoutUserTutorialsInput {
  @Field(() => TutorialChapterDatasCreateWithoutUserTutorialsInput, {
    nullable: true,
  })
  create?: TutorialChapterDatasCreateWithoutUserTutorialsInput

  @Field(() => TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput, {
    nullable: true,
  })
  connectOrCreate?: TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput

  @Field(() => TutorialChapterDatasWhereUniqueInput, { nullable: true })
  connect?: TutorialChapterDatasWhereUniqueInput
}
