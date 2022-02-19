import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialContentsCreateWithoutTutorialChapterDatasInput } from './tutorial-contents-create-without-tutorial-chapter-datas.input'
import { TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput } from './tutorial-contents-create-or-connect-without-tutorial-chapter-datas.input'
import { TutorialContentsUpsertWithoutTutorialChapterDatasInput } from './tutorial-contents-upsert-without-tutorial-chapter-datas.input'
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input'
import { TutorialContentsUpdateWithoutTutorialChapterDatasInput } from './tutorial-contents-update-without-tutorial-chapter-datas.input'

@InputType()
export class TutorialContentsUpdateOneRequiredWithoutTutorialChapterDatasInput {
  @Field(() => TutorialContentsCreateWithoutTutorialChapterDatasInput, {
    nullable: true,
  })
  create?: TutorialContentsCreateWithoutTutorialChapterDatasInput

  @Field(
    () => TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput,
    { nullable: true },
  )
  connectOrCreate?: TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput

  @Field(() => TutorialContentsUpsertWithoutTutorialChapterDatasInput, {
    nullable: true,
  })
  upsert?: TutorialContentsUpsertWithoutTutorialChapterDatasInput

  @Field(() => TutorialContentsWhereUniqueInput, { nullable: true })
  connect?: TutorialContentsWhereUniqueInput

  @Field(() => TutorialContentsUpdateWithoutTutorialChapterDatasInput, {
    nullable: true,
  })
  update?: TutorialContentsUpdateWithoutTutorialChapterDatasInput
}
