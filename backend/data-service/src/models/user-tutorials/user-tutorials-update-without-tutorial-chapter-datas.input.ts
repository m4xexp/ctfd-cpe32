import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UsersUpdateOneRequiredWithoutUserTutorialsInput } from '../users/users-update-one-required-without-user-tutorials.input'

@InputType()
export class UserTutorialsUpdateWithoutTutorialChapterDatasInput {
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UsersUpdateOneRequiredWithoutUserTutorialsInput, {
    nullable: true,
  })
  users?: UsersUpdateOneRequiredWithoutUserTutorialsInput
}
