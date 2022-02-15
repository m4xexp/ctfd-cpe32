import { registerEnumType } from '@nestjs/graphql';

export enum TutorialContentsScalarFieldEnum {
    tutorial_id = "tutorial_id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TutorialContentsScalarFieldEnum, { name: 'TutorialContentsScalarFieldEnum', description: undefined })
