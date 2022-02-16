import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class UserTutorialsUncheckedCreateWithoutTutorialChapterDatasInput {
  @Field(() => String, { nullable: false })
  user_id!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
