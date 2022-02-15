import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TeamsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    team_id?: true;

    @Field(() => Boolean, {nullable:true})
    team_profile_pic?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    conuntry_code?: true;

    @Field(() => Boolean, {nullable:true})
    banned?: true;

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
