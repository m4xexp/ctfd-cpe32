import { registerEnumType } from '@nestjs/graphql';

export enum TypesScalarFieldEnum {
    types_id = "types_id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TypesScalarFieldEnum, { name: 'TypesScalarFieldEnum', description: undefined })
