import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialContentsCreateWithoutTutorialChapterDatasInput } from './tutorial-contents-create-without-tutorial-chapter-datas.input'
import { TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput } from './tutorial-contents-create-or-connect-without-tutorial-chapter-datas.input'
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input'

@InputType()
export class TutorialContentsCreateNestedOneWithoutTutorialChapterDatasInput {
  @Field(() => TutorialContentsCreateWithoutTutorialChapterDatasInput, {
    nullable: true,
  })
  create?: TutorialContentsCreateWithoutTutorialChapterDatasInput

  @Field(
    () => TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput,
    { nullable: true },
  )
  connectOrCreate?: TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput

  @Field(() => TutorialContentsWhereUniqueInput, { nullable: true })
  connect?: TutorialContentsWhereUniqueInput
}
