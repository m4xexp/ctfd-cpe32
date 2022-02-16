import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialChapterDatasWhereInput } from './tutorial-chapter-datas-where.input'
import { TutorialChapterDatasOrderByWithAggregationInput } from './tutorial-chapter-datas-order-by-with-aggregation.input'
import { TutorialChapterDatasScalarFieldEnum } from './tutorial-chapter-datas-scalar-field.enum'
import { TutorialChapterDatasScalarWhereWithAggregatesInput } from './tutorial-chapter-datas-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { TutorialChapterDatasCountAggregateInput } from './tutorial-chapter-datas-count-aggregate.input'
import { TutorialChapterDatasMinAggregateInput } from './tutorial-chapter-datas-min-aggregate.input'
import { TutorialChapterDatasMaxAggregateInput } from './tutorial-chapter-datas-max-aggregate.input'

@ArgsType()
export class TutorialChapterDatasGroupByArgs {
  @Field(() => TutorialChapterDatasWhereInput, { nullable: true })
  where?: TutorialChapterDatasWhereInput

  @Field(() => [TutorialChapterDatasOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<TutorialChapterDatasOrderByWithAggregationInput>

  @Field(() => [TutorialChapterDatasScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TutorialChapterDatasScalarFieldEnum>

  @Field(() => TutorialChapterDatasScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: TutorialChapterDatasScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => TutorialChapterDatasCountAggregateInput, { nullable: true })
  _count?: TutorialChapterDatasCountAggregateInput

  @Field(() => TutorialChapterDatasMinAggregateInput, { nullable: true })
  _min?: TutorialChapterDatasMinAggregateInput

  @Field(() => TutorialChapterDatasMaxAggregateInput, { nullable: true })
  _max?: TutorialChapterDatasMaxAggregateInput
}
