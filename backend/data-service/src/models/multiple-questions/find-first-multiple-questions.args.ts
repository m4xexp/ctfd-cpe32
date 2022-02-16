import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { MultipleQuestionsWhereInput } from './multiple-questions-where.input'
import { MultipleQuestionsOrderByWithRelationInput } from './multiple-questions-order-by-with-relation.input'
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input'
import { Int } from '@nestjs/graphql'
import { MultipleQuestionsScalarFieldEnum } from './multiple-questions-scalar-field.enum'

@ArgsType()
export class FindFirstMultipleQuestionsArgs {
  @Field(() => MultipleQuestionsWhereInput, { nullable: true })
  where?: MultipleQuestionsWhereInput

  @Field(() => [MultipleQuestionsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<MultipleQuestionsOrderByWithRelationInput>

  @Field(() => MultipleQuestionsWhereUniqueInput, { nullable: true })
  cursor?: MultipleQuestionsWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [MultipleQuestionsScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof MultipleQuestionsScalarFieldEnum>
}
