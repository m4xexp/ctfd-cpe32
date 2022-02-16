import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsUpdateInput } from './flag-questions-update.input'
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input'

@ArgsType()
export class UpdateOneFlagQuestionsArgs {
  @Field(() => FlagQuestionsUpdateInput, { nullable: false })
  data!: FlagQuestionsUpdateInput

  @Field(() => FlagQuestionsWhereUniqueInput, { nullable: false })
  where!: FlagQuestionsWhereUniqueInput
}
