import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TutorialContentsUncheckedCreateWithoutTutorialChapterDatasInput {
  @Field(() => String, { nullable: true })
  tutorial_id?: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
