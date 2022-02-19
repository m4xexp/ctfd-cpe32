import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TutorialContentsWhereInput } from './tutorial-contents-where.input'
import { TutorialContentsOrderByWithRelationInput } from './tutorial-contents-order-by-with-relation.input'
import { TutorialContentsWhereUniqueInput } from './tutorial-contents-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TutorialContentsCountAggregateInput } from './tutorial-contents-count-aggregate.input'
import { TutorialContentsMinAggregateInput } from './tutorial-contents-min-aggregate.input'
import { TutorialContentsMaxAggregateInput } from './tutorial-contents-max-aggregate.input'

@ArgsType()
export class TutorialContentsAggregateArgs {
  @Field(() => TutorialContentsWhereInput, { nullable: true })
  where?: TutorialContentsWhereInput

  @Field(() => [TutorialContentsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TutorialContentsOrderByWithRelationInput>

  @Field(() => TutorialContentsWhereUniqueInput, { nullable: true })
  cursor?: TutorialContentsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => TutorialContentsCountAggregateInput, { nullable: true })
  _count?: TutorialContentsCountAggregateInput

  @Field(() => TutorialContentsMinAggregateInput, { nullable: true })
  _min?: TutorialContentsMinAggregateInput

  @Field(() => TutorialContentsMaxAggregateInput, { nullable: true })
  _max?: TutorialContentsMaxAggregateInput
}
