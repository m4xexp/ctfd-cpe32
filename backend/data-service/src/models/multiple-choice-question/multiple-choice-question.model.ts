import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { MultipleQuestions } from '../multiple-questions/multiple-questions.model'

@ObjectType()
export class MultipleChoiceQuestion {
  @Field(() => ID, { nullable: false })
  multiple_choice_question_id!: string

  @Field(() => MultipleQuestions, { nullable: false })
  multipleQuestions?: MultipleQuestions

  @Field(() => String, { nullable: false })
  multiple_question_id!: string

  @Field(() => String, { nullable: false, defaultValue: '' })
  answer!: string

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  correct_flag!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date
}
