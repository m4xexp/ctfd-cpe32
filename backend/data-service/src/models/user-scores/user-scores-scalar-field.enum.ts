import { registerEnumType } from '@nestjs/graphql';

export enum UserScoresScalarFieldEnum {
    user_id = "user_id",
    challenge_id = "challenge_id",
    base_score = "base_score",
    time_score = "time_score",
    level_id = "level_id",
    types_id = "types_id",
    categories_id = "categories_id",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScoresScalarFieldEnum, { name: 'UserScoresScalarFieldEnum', description: undefined })
