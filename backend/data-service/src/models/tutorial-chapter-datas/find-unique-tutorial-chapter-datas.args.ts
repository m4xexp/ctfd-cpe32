import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialChapterDatasWhereUniqueInput } from './tutorial-chapter-datas-where-unique.input'

@ArgsType()
export class FindUniqueTutorialChapterDatasArgs {
  @Field(() => TutorialChapterDatasWhereUniqueInput, { nullable: false })
  where!: TutorialChapterDatasWhereUniqueInput
}
