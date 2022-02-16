import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { FlagQuestionsCountAggregate } from './flag-questions-count-aggregate.output'
import { FlagQuestionsMinAggregate } from './flag-questions-min-aggregate.output'
import { FlagQuestionsMaxAggregate } from './flag-questions-max-aggregate.output'

@ObjectType()
export class AggregateFlagQuestions {
  @Field(() => FlagQuestionsCountAggregate, { nullable: true })
  _count?: FlagQuestionsCountAggregate

  @Field(() => FlagQuestionsMinAggregate, { nullable: true })
  _min?: FlagQuestionsMinAggregate

  @Field(() => FlagQuestionsMaxAggregate, { nullable: true })
  _max?: FlagQuestionsMaxAggregate
}
