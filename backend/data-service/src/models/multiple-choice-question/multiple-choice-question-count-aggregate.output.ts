import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class MultipleChoiceQuestionCountAggregate {
  @Field(() => Int, { nullable: false })
  multiple_choice_question_id!: number

  @Field(() => Int, { nullable: false })
  multiple_question_id!: number

  @Field(() => Int, { nullable: false })
  answer!: number

  @Field(() => Int, { nullable: false })
  correct_flag!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
