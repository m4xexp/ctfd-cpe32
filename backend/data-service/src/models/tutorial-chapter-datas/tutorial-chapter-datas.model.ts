import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { TutorialContents } from '../tutorial-contents/tutorial-contents.model'
import { UserTutorials } from '../user-tutorials/user-tutorials.model'
import { TutorialChapterDatasCount } from './tutorial-chapter-datas-count.output'

@ObjectType()
export class TutorialChapterDatas {
  @Field(() => ID, { nullable: false })
  chapter_id!: string

  @Field(() => TutorialContents, { nullable: false })
  tutorialContents?: TutorialContents

  @Field(() => String, { nullable: false })
  tutorial_id!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  chapter_name!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  video_link!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  flag_link!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  description!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  question!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  answer!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [UserTutorials], { nullable: true })
  userTutorials?: Array<UserTutorials>

  @Field(() => TutorialChapterDatasCount, { nullable: false })
  _count?: TutorialChapterDatasCount
}
