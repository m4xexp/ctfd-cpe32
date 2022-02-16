import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input'

@ArgsType()
export class FindUniqueFlagQuestionsArgs {
  @Field(() => FlagQuestionsWhereUniqueInput, { nullable: false })
  where!: FlagQuestionsWhereUniqueInput
}
