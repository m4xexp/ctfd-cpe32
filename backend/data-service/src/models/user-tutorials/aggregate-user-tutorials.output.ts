import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserTutorialsCountAggregate } from './user-tutorials-count-aggregate.output';
import { UserTutorialsMinAggregate } from './user-tutorials-min-aggregate.output';
import { UserTutorialsMaxAggregate } from './user-tutorials-max-aggregate.output';

@ObjectType()
export class AggregateUserTutorials {

    @Field(() => UserTutorialsCountAggregate, {nullable:true})
    _count?: UserTutorialsCountAggregate;

    @Field(() => UserTutorialsMinAggregate, {nullable:true})
    _min?: UserTutorialsMinAggregate;

    @Field(() => UserTutorialsMaxAggregate, {nullable:true})
    _max?: UserTutorialsMaxAggregate;
}
