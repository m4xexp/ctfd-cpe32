import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsCreateInput } from './flag-questions-create.input'

@ArgsType()
export class CreateOneFlagQuestionsArgs {
  @Field(() => FlagQuestionsCreateInput, { nullable: false })
  data!: FlagQuestionsCreateInput
}
