import { registerEnumType } from '@nestjs/graphql';

export enum LevelsScalarFieldEnum {
    level_id = "level_id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LevelsScalarFieldEnum, { name: 'LevelsScalarFieldEnum', description: undefined })
