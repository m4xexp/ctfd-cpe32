import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { TutorialContentsRelationFilter } from '../tutorial-contents/tutorial-contents-relation-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { UserTutorialsListRelationFilter } from '../user-tutorials/user-tutorials-list-relation-filter.input'

@InputType()
export class TutorialChapterDatasWhereInput {
  @Field(() => [TutorialChapterDatasWhereInput], { nullable: true })
  AND?: Array<TutorialChapterDatasWhereInput>

  @Field(() => [TutorialChapterDatasWhereInput], { nullable: true })
  OR?: Array<TutorialChapterDatasWhereInput>

  @Field(() => [TutorialChapterDatasWhereInput], { nullable: true })
  NOT?: Array<TutorialChapterDatasWhereInput>

  @Field(() => StringFilter, { nullable: true })
  chapter_id?: StringFilter

  @Field(() => TutorialContentsRelationFilter, { nullable: true })
  tutorialContents?: TutorialContentsRelationFilter

  @Field(() => StringFilter, { nullable: true })
  tutorial_id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  chapter_name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  video_link?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  flag_link?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  question?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  answer?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => UserTutorialsListRelationFilter, { nullable: true })
  userTutorials?: UserTutorialsListRelationFilter
}
