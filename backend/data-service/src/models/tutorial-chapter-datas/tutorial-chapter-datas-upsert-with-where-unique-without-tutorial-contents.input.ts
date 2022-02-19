import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'
import { TutorialChapterDatasUpdateWithoutTutorialContentsInput } from './tutorial-chapter-datas-update-without-tutorial-contents.input'
import { TutorialChapterDatasCreateWithoutTutorialContentsInput } from './tutorial-chapter-datas-create-without-tutorial-contents.input'

@InputType()
export class TutorialChapterDatasUpsertWithWhereUniqueWithoutTutorialContentsInput {
  @Field(() => TutorialChapterDatasWhereUniqueInput, { nullable: false })
  where!: TutorialChapterDatasWhereUniqueInput

  @Field(() => TutorialChapterDatasUpdateWithoutTutorialContentsInput, {
    nullable: false,
  })
  update!: TutorialChapterDatasUpdateWithoutTutorialContentsInput

  @Field(() => TutorialChapterDatasCreateWithoutTutorialContentsInput, {
    nullable: false,
  })
  create!: TutorialChapterDatasCreateWithoutTutorialContentsInput
}
