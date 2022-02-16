import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsUpdateManyMutationInput } from './flag-questions-update-many-mutation.input'
import { FlagQuestionsWhereInput } from './flag-questions-where.input'

@ArgsType()
export class UpdateManyFlagQuestionsArgs {
  @Field(() => FlagQuestionsUpdateManyMutationInput, { nullable: false })
  data!: FlagQuestionsUpdateManyMutationInput

  @Field(() => FlagQuestionsWhereInput, { nullable: true })
  where?: FlagQuestionsWhereInput
}
