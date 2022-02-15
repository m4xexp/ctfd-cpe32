import { registerEnumType } from '@nestjs/graphql';

export enum UserBadgesScalarFieldEnum {
    user_id = "user_id",
    badge_id = "badge_id",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserBadgesScalarFieldEnum, { name: 'UserBadgesScalarFieldEnum', description: undefined })
