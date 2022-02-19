import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TutorialChapterDatasCountAggregate } from './tutorial-chapter-datas-count-aggregate.output'
import { TutorialChapterDatasMinAggregate } from './tutorial-chapter-datas-min-aggregate.output'
import { TutorialChapterDatasMaxAggregate } from './tutorial-chapter-datas-max-aggregate.output'

@ObjectType()
export class TutorialChapterDatasGroupBy {
  @Field(() => String, { nullable: false })
  chapter_id!: string

  @Field(() => String, { nullable: false })
  tutorial_id!: string

  @Field(() => String, { nullable: false })
  chapter_name!: string

  @Field(() => String, { nullable: false })
  video_link!: string

  @Field(() => String, { nullable: false })
  flag_link!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => String, { nullable: false })
  question!: string

  @Field(() => String, { nullable: false })
  answer!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => TutorialChapterDatasCountAggregate, { nullable: true })
  _count?: TutorialChapterDatasCountAggregate

  @Field(() => TutorialChapterDatasMinAggregate, { nullable: true })
  _min?: TutorialChapterDatasMinAggregate

  @Field(() => TutorialChapterDatasMaxAggregate, { nullable: true })
  _max?: TutorialChapterDatasMaxAggregate
}
