import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TypesCountAggregate } from './types-count-aggregate.output';
import { TypesMinAggregate } from './types-min-aggregate.output';
import { TypesMaxAggregate } from './types-max-aggregate.output';

@ObjectType()
export class TypesGroupBy {

    @Field(() => String, {nullable:false})
    types_id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TypesCountAggregate, {nullable:true})
    _count?: TypesCountAggregate;

    @Field(() => TypesMinAggregate, {nullable:true})
    _min?: TypesMinAggregate;

    @Field(() => TypesMaxAggregate, {nullable:true})
    _max?: TypesMaxAggregate;
}
