import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { FlagQuestionsWhereInput } from './flag-questions-where.input'
import { FlagQuestionsOrderByWithRelationInput } from './flag-questions-order-by-with-relation.input'
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input'
import { Int } from '@nestjs/graphql'
import { FlagQuestionsScalarFieldEnum } from './flag-questions-scalar-field.enum'

@ArgsType()
export class FindManyFlagQuestionsArgs {
  @Field(() => FlagQuestionsWhereInput, { nullable: true })
  where?: FlagQuestionsWhereInput

  @Field(() => [FlagQuestionsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<FlagQuestionsOrderByWithRelationInput>

  @Field(() => FlagQuestionsWhereUniqueInput, { nullable: true })
  cursor?: FlagQuestionsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [FlagQuestionsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof FlagQuestionsScalarFieldEnum>
}
