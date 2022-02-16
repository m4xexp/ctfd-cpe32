import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateWithoutTutorialContentsInput } from './tutorial-chapter-datas-create-without-tutorial-contents.input'
import { TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput } from './tutorial-chapter-datas-create-or-connect-without-tutorial-contents.input'
import { TutorialChapterDatasUpsertWithWhereUniqueWithoutTutorialContentsInput } from './tutorial-chapter-datas-upsert-with-where-unique-without-tutorial-contents.input'
import { TutorialChapterDatasCreateManyTutorialContentsInputEnvelope } from './tutorial-chapter-datas-create-many-tutorial-contents-input-envelope.input'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'
import { TutorialChapterDatasUpdateWithWhereUniqueWithoutTutorialContentsInput } from './tutorial-chapter-datas-update-with-where-unique-without-tutorial-contents.input'
import { TutorialChapterDatasUpdateManyWithWhereWithoutTutorialContentsInput } from './tutorial-chapter-datas-update-many-with-where-without-tutorial-contents.input'
import { TutorialChapterDatasScalarWhereInput } from './tutorial-chapter-datas-scalar-where.input'

@InputType()
export class TutorialChapterDatasUncheckedUpdateManyWithoutTutorialContentsInput {
  @Field(() => [TutorialChapterDatasCreateWithoutTutorialContentsInput], {
    nullable: true,
  })
  create?: Array<TutorialChapterDatasCreateWithoutTutorialContentsInput>

  @Field(
    () => [TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput],
    { nullable: true },
  )
  connectOrCreate?: Array<TutorialChapterDatasCreateOrConnectWithoutTutorialContentsInput>

  @Field(
    () => [
      TutorialChapterDatasUpsertWithWhereUniqueWithoutTutorialContentsInput,
    ],
    { nullable: true },
  )
  upsert?: Array<TutorialChapterDatasUpsertWithWhereUniqueWithoutTutorialContentsInput>

  @Field(() => TutorialChapterDatasCreateManyTutorialContentsInputEnvelope, {
    nullable: true,
  })
  createMany?: TutorialChapterDatasCreateManyTutorialContentsInputEnvelope

  @Field(() => [TutorialChapterDatasWhereUniqueInput], { nullable: true })
  set?: Array<TutorialChapterDatasWhereUniqueInput>

  @Field(() => [TutorialChapterDatasWhereUniqueInput], { nullable: true })
  disconnect?: Array<TutorialChapterDatasWhereUniqueInput>

  @Field(() => [TutorialChapterDatasWhereUniqueInput], { nullable: true })
  delete?: Array<TutorialChapterDatasWhereUniqueInput>

  @Field(() => [TutorialChapterDatasWhereUniqueInput], { nullable: true })
  connect?: Array<TutorialChapterDatasWhereUniqueInput>

  @Field(
    () => [
      TutorialChapterDatasUpdateWithWhereUniqueWithoutTutorialContentsInput,
    ],
    { nullable: true },
  )
  update?: Array<TutorialChapterDatasUpdateWithWhereUniqueWithoutTutorialContentsInput>

  @Field(
    () => [TutorialChapterDatasUpdateManyWithWhereWithoutTutorialContentsInput],
    { nullable: true },
  )
  updateMany?: Array<TutorialChapterDatasUpdateManyWithWhereWithoutTutorialContentsInput>

  @Field(() => [TutorialChapterDatasScalarWhereInput], { nullable: true })
  deleteMany?: Array<TutorialChapterDatasScalarWhereInput>
}
