import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCountAggregate {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    user_invite_id!: number;

    @Field(() => Int, {nullable:false})
    profile_pic!: number;

    @Field(() => Int, {nullable:false})
    total_score!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    conuntry_code!: number;

    @Field(() => Int, {nullable:false})
    banned!: number;

    @Field(() => Int, {nullable:false})
    verified!: number;

    @Field(() => Int, {nullable:false})
    quick_start_status!: number;

    @Field(() => Int, {nullable:false})
    profile_description!: number;

    @Field(() => Int, {nullable:false})
    github_link!: number;

    @Field(() => Int, {nullable:false})
    twitter_link!: number;

    @Field(() => Int, {nullable:false})
    facebook_link!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
