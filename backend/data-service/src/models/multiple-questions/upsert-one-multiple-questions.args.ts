import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { MultipleQuestionsCreateInput } from './multiple-questions-create.input'
import { MultipleQuestionsUpdateInput } from './multiple-questions-update.input'

@ArgsType()
export class UpsertOneMultipleQuestionsArgs {
  @Field(() => MultipleQuestionsWhereUniqueInput, { nullable: false })
  where!: MultipleQuestionsWhereUniqueInput

  @Field(() => MultipleQuestionsCreateInput, { nullable: false })
  create!: MultipleQuestionsCreateInput

  @Field(() => MultipleQuestionsUpdateInput, { nullable: false })
  update!: MultipleQuestionsUpdateInput
}
