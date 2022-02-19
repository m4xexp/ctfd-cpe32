import { registerEnumType } from '@nestjs/graphql'

export enum TeamMembersScalarFieldEnum {
  user_id = 'user_id',
  team_id = 'team_id',
  type = 'type',
  status = 'status',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(TeamMembersScalarFieldEnum, {
  name: 'TeamMembersScalarFieldEnum',
  description: undefined,
})
