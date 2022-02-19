import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasUncheckedCreateNestedManyWithoutTutorialContentsInput } from '../tutorial-chapter-datas/tutorial-chapter-datas-unchecked-create-nested-many-without-tutorial-contents.input'

@InputType()
export class TutorialContentsUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  tutorial_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(
    () =>
      TutorialChapterDatasUncheckedCreateNestedManyWithoutTutorialContentsInput,
    { nullable: true },
  )
  tutorialChapterDatas?: TutorialChapterDatasUncheckedCreateNestedManyWithoutTutorialContentsInput
}
