import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { TutorialContentsOrderByWithRelationInput } from '../tutorial-contents/tutorial-contents-order-by-with-relation.input'
import { UserTutorialsOrderByRelationAggregateInput } from '../user-tutorials/user-tutorials-order-by-relation-aggregate.input'

@InputType()
export class TutorialChapterDatasOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  chapter_id?: keyof typeof SortOrder

  @Field(() => TutorialContentsOrderByWithRelationInput, { nullable: true })
  tutorialContents?: TutorialContentsOrderByWithRelationInput

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

  @Field(() => UserTutorialsOrderByRelationAggregateInput, { nullable: true })
  userTutorials?: UserTutorialsOrderByRelationAggregateInput
}
