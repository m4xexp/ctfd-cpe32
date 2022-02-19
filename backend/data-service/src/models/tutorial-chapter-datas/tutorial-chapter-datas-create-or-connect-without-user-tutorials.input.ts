import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'
import { TutorialChapterDatasCreateWithoutUserTutorialsInput } from './tutorial-chapter-datas-create-without-user-tutorials.input'

@InputType()
export class TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput {
  @Field(() => TutorialChapterDatasWhereUniqueInput, { nullable: false })
  where!: TutorialChapterDatasWhereUniqueInput

  @Field(() => TutorialChapterDatasCreateWithoutUserTutorialsInput, {
    nullable: false,
  })
  create!: TutorialChapterDatasCreateWithoutUserTutorialsInput
}
