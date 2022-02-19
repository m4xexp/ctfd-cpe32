import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TutorialChapterDatasWhereUniqueInput {
  @Field(() => String, { nullable: true })
  chapter_id?: string
}
