import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class UsersCreateManyInput {

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
}
