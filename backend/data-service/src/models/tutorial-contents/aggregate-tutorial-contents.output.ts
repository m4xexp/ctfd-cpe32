import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TutorialContentsCountAggregate } from './tutorial-contents-count-aggregate.output'
import { TutorialContentsMinAggregate } from './tutorial-contents-min-aggregate.output'
import { TutorialContentsMaxAggregate } from './tutorial-contents-max-aggregate.output'

@ObjectType()
export class AggregateTutorialContents {
  @Field(() => TutorialContentsCountAggregate, { nullable: true })
  _count?: TutorialContentsCountAggregate

  @Field(() => TutorialContentsMinAggregate, { nullable: true })
  _min?: TutorialContentsMinAggregate

  @Field(() => TutorialContentsMaxAggregate, { nullable: true })
  _max?: TutorialContentsMaxAggregate
}
