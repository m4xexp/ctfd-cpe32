import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserBadgesCreateNestedManyWithoutUsersInput } from '../user-badges/user-badges-create-nested-many-without-users.input';
import { TeamMembersCreateNestedManyWithoutUsersInput } from '../team-members/team-members-create-nested-many-without-users.input';
import { UserTutorialsCreateNestedManyWithoutUsersInput } from '../user-tutorials/user-tutorials-create-nested-many-without-users.input';
import { UserScoresCreateNestedManyWithoutUsersInput } from '../user-scores/user-scores-create-nested-many-without-users.input';

@InputType()
export class UsersCreateWithoutUserLoggingsInput {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => Int, {nullable:true})
    user_invite_id?: number;

    @Field(() => String, {nullable:true})
    profile_pic?: string;

    @Field(() => Float, {nullable:true})
    total_score?: number;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    conuntry_code?: string;

    @Field(() => Boolean, {nullable:true})
    banned?: boolean;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => Boolean, {nullable:true})
    quick_start_status?: boolean;

    @Field(() => String, {nullable:true})
    profile_description?: string;

    @Field(() => String, {nullable:true})
    github_link?: string;

    @Field(() => String, {nullable:true})
    twitter_link?: string;

    @Field(() => String, {nullable:true})
    facebook_link?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserBadgesCreateNestedManyWithoutUsersInput, {nullable:true})
    userBadges?: UserBadgesCreateNestedManyWithoutUsersInput;

    @Field(() => TeamMembersCreateNestedManyWithoutUsersInput, {nullable:true})
    teamMembers?: TeamMembersCreateNestedManyWithoutUsersInput;

    @Field(() => UserTutorialsCreateNestedManyWithoutUsersInput, {nullable:true})
    userTutorials?: UserTutorialsCreateNestedManyWithoutUsersInput;

    @Field(() => UserScoresCreateNestedManyWithoutUsersInput, {nullable:true})
    userScores?: UserScoresCreateNestedManyWithoutUsersInput;
}
