import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    user_id = "user_id",
    user_invite_id = "user_invite_id",
    profile_pic = "profile_pic",
    total_score = "total_score",
    type = "type",
    name = "name",
    password = "password",
    email = "email",
    conuntry_code = "conuntry_code",
    banned = "banned",
    verified = "verified",
    quick_start_status = "quick_start_status",
    profile_description = "profile_description",
    github_link = "github_link",
    twitter_link = "twitter_link",
    facebook_link = "facebook_link",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })
