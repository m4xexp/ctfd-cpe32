import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TutorialChapterDatasCountAggregate } from './tutorial-chapter-datas-count-aggregate.output'
import { TutorialChapterDatasMinAggregate } from './tutorial-chapter-datas-min-aggregate.output'
import { TutorialChapterDatasMaxAggregate } from './tutorial-chapter-datas-max-aggregate.output'

@ObjectType()
export class AggregateTutorialChapterDatas {
  @Field(() => TutorialChapterDatasCountAggregate, { nullable: true })
  _count?: TutorialChapterDatasCountAggregate

  @Field(() => TutorialChapterDatasMinAggregate, { nullable: true })
  _min?: TutorialChapterDatasMinAggregate

  @Field(() => TutorialChapterDatasMaxAggregate, { nullable: true })
  _max?: TutorialChapterDatasMaxAggregate
}
