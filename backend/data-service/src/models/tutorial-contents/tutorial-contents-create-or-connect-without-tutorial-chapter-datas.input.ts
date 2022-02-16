import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input'
import { TutorialContentsCreateWithoutTutorialChapterDatasInput } from './tutorial-contents-create-without-tutorial-chapter-datas.input'

@InputType()
export class TutorialContentsCreateOrConnectWithoutTutorialChapterDatasInput {
  @Field(() => TutorialContentsWhereUniqueInput, { nullable: false })
  where!: TutorialContentsWhereUniqueInput

  @Field(() => TutorialContentsCreateWithoutTutorialChapterDatasInput, {
    nullable: false,
  })
  create!: TutorialContentsCreateWithoutTutorialChapterDatasInput
}
