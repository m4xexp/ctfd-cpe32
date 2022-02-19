import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TutorialChapterDatasCreateNestedManyWithoutTutorialContentsInput } from '../tutorial-chapter-datas/tutorial-chapter-datas-create-nested-many-without-tutorial-contents.input'

@InputType()
export class TutorialContentsCreateInput {
  @Field(() => String, { nullable: true })
  tutorial_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(
    () => TutorialChapterDatasCreateNestedManyWithoutTutorialContentsInput,
    { nullable: true },
  )
  tutorialChapterDatas?: TutorialChapterDatasCreateNestedManyWithoutTutorialContentsInput
}
