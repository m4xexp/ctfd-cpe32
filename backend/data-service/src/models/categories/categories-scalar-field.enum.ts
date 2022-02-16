import { registerEnumType } from '@nestjs/graphql'

export enum CategoriesScalarFieldEnum {
  categories_id = 'categories_id',
  name = 'name',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(CategoriesScalarFieldEnum, {
  name: 'CategoriesScalarFieldEnum',
  description: undefined,
})
