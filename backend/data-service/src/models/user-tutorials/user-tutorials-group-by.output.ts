import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserTutorialsCountAggregate } from './user-tutorials-count-aggregate.output';
import { UserTutorialsMinAggregate } from './user-tutorials-min-aggregate.output';
import { UserTutorialsMaxAggregate } from './user-tutorials-max-aggregate.output';

@ObjectType()
export class UserTutorialsGroupBy {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    chapter_id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserTutorialsCountAggregate, {nullable:true})
    _count?: UserTutorialsCountAggregate;

    @Field(() => UserTutorialsMinAggregate, {nullable:true})
    _min?: UserTutorialsMinAggregate;

    @Field(() => UserTutorialsMaxAggregate, {nullable:true})
    _max?: UserTutorialsMaxAggregate;
}
