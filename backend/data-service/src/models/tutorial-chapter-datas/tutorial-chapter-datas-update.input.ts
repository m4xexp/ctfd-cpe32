import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { TutorialContentsUpdateOneRequiredWithoutTutorialChapterDatasInput } from '../tutorial-contents/tutorial-contents-update-one-required-without-tutorial-chapter-datas.input'
import { UserTutorialsUpdateManyWithoutTutorialChapterDatasInput } from '../user-tutorials/user-tutorials-update-many-without-tutorial-chapter-datas.input'

@InputType()
export class TutorialChapterDatasUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  chapter_id?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  chapter_name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  video_link?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  flag_link?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  question?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  answer?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(
    () => TutorialContentsUpdateOneRequiredWithoutTutorialChapterDatasInput,
    { nullable: true },
  )
  tutorialContents?: TutorialContentsUpdateOneRequiredWithoutTutorialChapterDatasInput

  @Field(() => UserTutorialsUpdateManyWithoutTutorialChapterDatasInput, {
    nullable: true,
  })
  userTutorials?: UserTutorialsUpdateManyWithoutTutorialChapterDatasInput
}
