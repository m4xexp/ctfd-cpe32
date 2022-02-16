import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasUpdateWithoutUserTutorialsInput } from './tutorial-chapter-datas-update-without-user-tutorials.input'
import { TutorialChapterDatasCreateWithoutUserTutorialsInput } from './tutorial-chapter-datas-create-without-user-tutorials.input'

@InputType()
export class TutorialChapterDatasUpsertWithoutUserTutorialsInput {
  @Field(() => TutorialChapterDatasUpdateWithoutUserTutorialsInput, {
    nullable: false,
  })
  update!: TutorialChapterDatasUpdateWithoutUserTutorialsInput

  @Field(() => TutorialChapterDatasCreateWithoutUserTutorialsInput, {
    nullable: false,
  })
  create!: TutorialChapterDatasCreateWithoutUserTutorialsInput
}
