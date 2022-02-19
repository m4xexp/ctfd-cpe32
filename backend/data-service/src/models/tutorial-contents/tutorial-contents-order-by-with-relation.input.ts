import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TutorialChapterDatasOrderByRelationAggregateInput } from '../tutorial-chapter-datas/tutorial-chapter-datas-order-by-relation-aggregate.input'

@InputType()
export class TutorialContentsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  tutorial_id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => TutorialChapterDatasOrderByRelationAggregateInput, {
    nullable: true,
  })
  tutorialChapterDatas?: TutorialChapterDatasOrderByRelationAggregateInput
}
