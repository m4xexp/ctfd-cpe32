import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateWithoutTutorialContentsInput } from './tutorial-chapter-datas-create-without-tutorial-contents.input'
import { TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput } from './tutorial-chapter-datas-create-or-connect-without-tutorial-contents.input'
import { TutorialChapterDatasCreateManyTutorialContentsInputEnvelope } from './tutorial-chapter-datas-create-many-tutorial-contents-input-envelope.input'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'

@InputType()
export class TutorialChapterDatasCreateNestedManyWithoutTutorialContentsInput {
  @Field(() => [TutorialChapterDatasCreateWithoutTutorialContentsInput], {
    nullable: true,
  })
  create?: Array<TutorialChapterDatasCreateWithoutTutorialContentsInput>

  @Field(
    () => [TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput],
    { nullable: true },
  )
  connectOrCreate?: Array<TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput>

  @Field(() => TutorialChapterDatasCreateManyTutorialContentsInputEnvelope, {
    nullable: true,
  })
  createMany?: TutorialChapterDatasCreateManyTutorialContentsInputEnvelope

  @Field(() => [TutorialChapterDatasWhereUniqueInput], { nullable: true })
  connect?: Array<TutorialChapterDatasWhereUniqueInput>
}
