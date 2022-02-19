import { registerEnumType } from '@nestjs/graphql'

export enum MultipleChoiceQuestionScalarFieldEnum {
  multiple_choice_question_id = 'multiple_choice_question_id',
  multiple_question_id = 'multiple_question_id',
  answer = 'answer',
  correct_flag = 'correct_flag',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(MultipleChoiceQuestionScalarFieldEnum, {
  name: 'MultipleChoiceQuestionScalarFieldEnum',
  description: undefined,
})
