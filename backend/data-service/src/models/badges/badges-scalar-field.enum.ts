import { registerEnumType } from '@nestjs/graphql'

export enum BadgesScalarFieldEnum {
  badge_id = 'badge_id',
  condition = 'condition',
  name = 'name',
  link = 'link',
  description = 'description',
  status = 'status',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(BadgesScalarFieldEnum, {
  name: 'BadgesScalarFieldEnum',
  description: undefined,
})
