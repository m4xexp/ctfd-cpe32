import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TeamsCountAggregate } from './teams-count-aggregate.output';
import { TeamsMinAggregate } from './teams-min-aggregate.output';
import { TeamsMaxAggregate } from './teams-max-aggregate.output';

@ObjectType()
export class TeamsGroupBy {

    @Field(() => String, {nullable:false})
    team_id!: string;

    @Field(() => String, {nullable:true})
    team_profile_pic?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    conuntry_code!: string;

    @Field(() => Boolean, {nullable:false})
    banned!: boolean;

    @Field(() => String, {nullable:false})
    github_link!: string;

    @Field(() => String, {nullable:false})
    twitter_link!: string;

    @Field(() => String, {nullable:false})
    facebook_link!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TeamsCountAggregate, {nullable:true})
    _count?: TeamsCountAggregate;

    @Field(() => TeamsMinAggregate, {nullable:true})
    _min?: TeamsMinAggregate;

    @Field(() => TeamsMaxAggregate, {nullable:true})
    _max?: TeamsMaxAggregate;
}
