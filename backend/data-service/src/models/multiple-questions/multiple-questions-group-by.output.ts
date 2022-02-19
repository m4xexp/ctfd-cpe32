import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { MultipleQuestionsCountAggregate } from './multiple-questions-count-aggregate.output'
import { MultipleQuestionsMinAggregate } from './multiple-questions-min-aggregate.output'
import { MultipleQuestionsMaxAggregate } from './multiple-questions-max-aggregate.output'

@ObjectType()
export class MultipleQuestionsGroupBy {
  @Field(() => String, { nullable: false })
  multiple_question_id!: string

  @Field(() => String, { nullable: false })
  challenge_id!: string

  @Field(() => String, { nullable: false })
  question!: string

  @Field(() => String, { nullable: false })
  hint!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => MultipleQuestionsCountAggregate, { nullable: true })
  _count?: MultipleQuestionsCountAggregate

  @Field(() => MultipleQuestionsMinAggregate, { nullable: true })
  _min?: MultipleQuestionsMinAggregate

  @Field(() => MultipleQuestionsMaxAggregate, { nullable: true })
  _max?: MultipleQuestionsMaxAggregate
}
