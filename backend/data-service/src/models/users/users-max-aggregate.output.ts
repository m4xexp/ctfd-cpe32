import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UsersMaxAggregate {

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

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    email?: string;

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
}
