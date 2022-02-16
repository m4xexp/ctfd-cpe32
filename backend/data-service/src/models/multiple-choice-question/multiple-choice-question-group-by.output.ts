import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { MultipleChoiceQuestionCountAggregate } from './multiple-choice-question-count-aggregate.output'
import { MultipleChoiceQuestionMinAggregate } from './multiple-choice-question-min-aggregate.output'
import { MultipleChoiceQuestionMaxAggregate } from './multiple-choice-question-max-aggregate.output'

@ObjectType()
export class MultipleChoiceQuestionGroupBy {
  @Field(() => String, { nullable: false })
  multiple_choice_question_id!: string

  @Field(() => String, { nullable: false })
  multiple_question_id!: string

  @Field(() => String, { nullable: false })
  answer!: string

  @Field(() => Boolean, { nullable: false })
  correct_flag!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => MultipleChoiceQuestionCountAggregate, { nullable: true })
  _count?: MultipleChoiceQuestionCountAggregate

  @Field(() => MultipleChoiceQuestionMinAggregate, { nullable: true })
  _min?: MultipleChoiceQuestionMinAggregate

  @Field(() => MultipleChoiceQuestionMaxAggregate, { nullable: true })
  _max?: MultipleChoiceQuestionMaxAggregate
}
