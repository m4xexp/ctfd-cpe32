import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { TutorialChapterDatas } from '../tutorial-chapter-datas/tutorial-chapter-datas.model'
import { TutorialContentsCount } from './tutorial-contents-count.output'

@ObjectType()
export class TutorialContents {
  @Field(() => ID, { nullable: false })
  tutorial_id!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  name!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [TutorialChapterDatas], { nullable: true })
  tutorialChapterDatas?: Array<TutorialChapterDatas>

  @Field(() => TutorialContentsCount, { nullable: false })
  _count?: TutorialContentsCount
}
