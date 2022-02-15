import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TeamsCountAggregate } from './teams-count-aggregate.output';
import { TeamsMinAggregate } from './teams-min-aggregate.output';
import { TeamsMaxAggregate } from './teams-max-aggregate.output';

@ObjectType()
export class AggregateTeams {

    @Field(() => TeamsCountAggregate, {nullable:true})
    _count?: TeamsCountAggregate;

    @Field(() => TeamsMinAggregate, {nullable:true})
    _min?: TeamsMinAggregate;

    @Field(() => TeamsMaxAggregate, {nullable:true})
    _max?: TeamsMaxAggregate;
}
