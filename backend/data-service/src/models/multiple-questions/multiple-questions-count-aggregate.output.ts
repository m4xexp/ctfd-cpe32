import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class MultipleQuestionsCountAggregate {
  @Field(() => Int, { nullable: false })
  multiple_question_id!: number

  @Field(() => Int, { nullable: false })
  challenge_id!: number

  @Field(() => Int, { nullable: false })
  question!: number

  @Field(() => Int, { nullable: false })
  hint!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
