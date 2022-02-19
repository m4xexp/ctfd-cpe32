import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { MultipleQuestionsScalarWhereInput } from './multiple-questions-scalar-where.input'
import { MultipleQuestionsUpdateManyMutationInput } from './multiple-questions-update-many-mutation.input'

@InputType()
export class MultipleQuestionsUpdateManyWithWhereWithoutChallengesInput {
  @Field(() => MultipleQuestionsScalarWhereInput, { nullable: false })
  where!: MultipleQuestionsScalarWhereInput

  @Field(() => MultipleQuestionsUpdateManyMutationInput, { nullable: false })
  data!: MultipleQuestionsUpdateManyMutationInput
}
