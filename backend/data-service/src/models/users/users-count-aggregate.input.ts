import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsersCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    user_invite_id?: true;

    @Field(() => Boolean, {nullable:true})
    profile_pic?: true;

    @Field(() => Boolean, {nullable:true})
    total_score?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    conuntry_code?: true;

    @Field(() => Boolean, {nullable:true})
    banned?: true;

    @Field(() => Boolean, {nullable:true})
    verified?: true;

    @Field(() => Boolean, {nullable:true})
    quick_start_status?: true;

    @Field(() => Boolean, {nullable:true})
    profile_description?: true;

    @Field(() => Boolean, {nullable:true})
    github_link?: true;

    @Field(() => Boolean, {nullable:true})
    twitter_link?: true;

    @Field(() => Boolean, {nullable:true})
    facebook_link?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
