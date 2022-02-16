import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TutorialChapterDatasCountOrderByAggregateInput } from './tutorial-chapter-datas-count-order-by-aggregate.input'
import { TutorialChapterDatasMaxOrderByAggregateInput } from './tutorial-chapter-datas-max-order-by-aggregate.input'
import { TutorialChapterDatasMinOrderByAggregateInput } from './tutorial-chapter-datas-min-order-by-aggregate.input'

@InputType()
export class TutorialChapterDatasOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  chapter_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  tutorial_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  chapter_name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  video_link?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  flag_link?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  question?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  answer?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => TutorialChapterDatasCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: TutorialChapterDatasCountOrderByAggregateInput

  @Field(() => TutorialChapterDatasMaxOrderByAggregateInput, { nullable: true })
  _max?: TutorialChapterDatasMaxOrderByAggregateInput

  @Field(() => TutorialChapterDatasMinOrderByAggregateInput, { nullable: true })
  _min?: TutorialChapterDatasMinOrderByAggregateInput
}
