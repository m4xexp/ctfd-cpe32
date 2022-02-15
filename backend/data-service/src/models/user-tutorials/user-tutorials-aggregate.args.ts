import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserTutorialsWhereInput } from './user-tutorials-where.input';
import { UserTutorialsOrderByWithRelationInput } from './user-tutorials-order-by-with-relation.input';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserTutorialsCountAggregateInput } from './user-tutorials-count-aggregate.input';
import { UserTutorialsMinAggregateInput } from './user-tutorials-min-aggregate.input';
import { UserTutorialsMaxAggregateInput } from './user-tutorials-max-aggregate.input';

@ArgsType()
export class UserTutorialsAggregateArgs {

    @Field(() => UserTutorialsWhereInput, {nullable:true})
    where?: UserTutorialsWhereInput;

    @Field(() => [UserTutorialsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserTutorialsOrderByWithRelationInput>;

    @Field(() => UserTutorialsWhereUniqueInput, {nullable:true})
    cursor?: UserTutorialsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserTutorialsCountAggregateInput, {nullable:true})
    _count?: UserTutorialsCountAggregateInput;

    @Field(() => UserTutorialsMinAggregateInput, {nullable:true})
    _min?: UserTutorialsMinAggregateInput;

    @Field(() => UserTutorialsMaxAggregateInput, {nullable:true})
    _max?: UserTutorialsMaxAggregateInput;
}
