import { registerEnumType } from '@nestjs/graphql';

export enum TeamsScalarFieldEnum {
    team_id = "team_id",
    team_profile_pic = "team_profile_pic",
    name = "name",
    conuntry_code = "conuntry_code",
    banned = "banned",
    github_link = "github_link",
    twitter_link = "twitter_link",
    facebook_link = "facebook_link",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TeamsScalarFieldEnum, { name: 'TeamsScalarFieldEnum', description: undefined })
