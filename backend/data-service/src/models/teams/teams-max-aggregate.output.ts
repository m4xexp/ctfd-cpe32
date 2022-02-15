import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TeamsMaxAggregate {

    @Field(() => String, {nullable:true})
    team_id?: string;

    @Field(() => String, {nullable:true})
    team_profile_pic?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    conuntry_code?: string;

    @Field(() => Boolean, {nullable:true})
    banned?: boolean;

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
