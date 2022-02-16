import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { FlagQuestionsWhereInput } from './flag-questions-where.input'

@InputType()
export class FlagQuestionsListRelationFilter {
  @Field(() => FlagQuestionsWhereInput, { nullable: true })
  every?: FlagQuestionsWhereInput

  @Field(() => FlagQuestionsWhereInput, { nullable: true })
  some?: FlagQuestionsWhereInput

  @Field(() => FlagQuestionsWhereInput, { nullable: true })
  none?: FlagQuestionsWhereInput
}
