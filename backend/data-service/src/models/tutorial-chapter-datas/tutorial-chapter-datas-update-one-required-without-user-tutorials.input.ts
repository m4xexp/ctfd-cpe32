import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateWithoutUserTutorialsInput } from './tutorial-chapter-datas-create-without-user-tutorials.input'
import { TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput } from './tutorial-chapter-datas-create-or-connect-without-user-tutorials.input'
import { TutorialChapterDatasUpsertWithoutUserTutorialsInput } from './tutorial-chapter-datas-upsert-without-user-tutorials.input'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'
import { TutorialChapterDatasUpdateWithoutUserTutorialsInput } from './tutorial-chapter-datas-update-without-user-tutorials.input'

@InputType()
export class TutorialChapterDatasUpdateOneRequiredWithoutUserTutorialsInput {
  @Field(() => TutorialChapterDatasCreateWithoutUserTutorialsInput, {
    nullable: true,
  })
  create?: TutorialChapterDatasCreateWithoutUserTutorialsInput

  @Field(() => TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput, {
    nullable: true,
  })
  connectOrCreate?: TutorialChapterDatasCreateOrConnectWithoutUserTutorialsInput

  @Field(() => TutorialChapterDatasUpsertWithoutUserTutorialsInput, {
    nullable: true,
  })
  upsert?: TutorialChapterDatasUpsertWithoutUserTutorialsInput

  @Field(() => TutorialChapterDatasWhereUniqueInput, { nullable: true })
  connect?: TutorialChapterDatasWhereUniqueInput

  @Field(() => TutorialChapterDatasUpdateWithoutUserTutorialsInput, {
    nullable: true,
  })
  update?: TutorialChapterDatasUpdateWithoutUserTutorialsInput
}
