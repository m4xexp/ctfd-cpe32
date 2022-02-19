import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsCreateManyInput } from './flag-questions-create-many.input'

@ArgsType()
export class CreateManyFlagQuestionsArgs {
  @Field(() => [FlagQuestionsCreateManyInput], { nullable: false })
  data!: Array<FlagQuestionsCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
