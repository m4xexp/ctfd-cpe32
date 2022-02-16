import { registerEnumType } from '@nestjs/graphql'

export enum MultipleQuestionsScalarFieldEnum {
  multiple_question_id = 'multiple_question_id',
  challenge_id = 'challenge_id',
  question = 'question',
  hint = 'hint',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(MultipleQuestionsScalarFieldEnum, {
  name: 'MultipleQuestionsScalarFieldEnum',
  description: undefined,
})
