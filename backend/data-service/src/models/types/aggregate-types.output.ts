import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TypesCountAggregate } from './types-count-aggregate.output';
import { TypesMinAggregate } from './types-min-aggregate.output';
import { TypesMaxAggregate } from './types-max-aggregate.output';

@ObjectType()
export class AggregateTypes {

    @Field(() => TypesCountAggregate, {nullable:true})
    _count?: TypesCountAggregate;

    @Field(() => TypesMinAggregate, {nullable:true})
    _min?: TypesMinAggregate;

    @Field(() => TypesMaxAggregate, {nullable:true})
    _max?: TypesMaxAggregate;
}
