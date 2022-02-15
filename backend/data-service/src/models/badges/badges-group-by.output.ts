import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BadgesCountAggregate } from './badges-count-aggregate.output';
import { BadgesMinAggregate } from './badges-min-aggregate.output';
import { BadgesMaxAggregate } from './badges-max-aggregate.output';

@ObjectType()
export class BadgesGroupBy {

    @Field(() => String, {nullable:false})
    badge_id!: string;

    @Field(() => String, {nullable:false})
    condition!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    link!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BadgesCountAggregate, {nullable:true})
    _count?: BadgesCountAggregate;

    @Field(() => BadgesMinAggregate, {nullable:true})
    _min?: BadgesMinAggregate;

    @Field(() => BadgesMaxAggregate, {nullable:true})
    _max?: BadgesMaxAggregate;
}
