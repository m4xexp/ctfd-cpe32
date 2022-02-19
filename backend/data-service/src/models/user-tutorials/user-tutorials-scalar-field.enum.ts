import { registerEnumType } from '@nestjs/graphql'

export enum UserTutorialsScalarFieldEnum {
  user_id = 'user_id',
  chapter_id = 'chapter_id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserTutorialsScalarFieldEnum, {
  name: 'UserTutorialsScalarFieldEnum',
  description: undefined,
})
