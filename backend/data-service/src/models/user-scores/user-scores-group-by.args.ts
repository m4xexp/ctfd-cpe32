import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserScoresWhereInput } from './user-scores-where.input';
import { UserScoresOrderByWithAggregationInput } from './user-scores-order-by-with-aggregation.input';
import { UserScoresScalarFieldEnum } from './user-scores-scalar-field.enum';
import { UserScoresScalarWhereWithAggregatesInput } from './user-scores-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserScoresCountAggregateInput } from './user-scores-count-aggregate.input';
import { UserScoresAvgAggregateInput } from './user-scores-avg-aggregate.input';
import { UserScoresSumAggregateInput } from './user-scores-sum-aggregate.input';
import { UserScoresMinAggregateInput } from './user-scores-min-aggregate.input';
import { UserScoresMaxAggregateInput } from './user-scores-max-aggregate.input';

@ArgsType()
export class UserScoresGroupByArgs {

    @Field(() => UserScoresWhereInput, {nullable:true})
    where?: UserScoresWhereInput;

    @Field(() => [UserScoresOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserScoresOrderByWithAggregationInput>;

    @Field(() => [UserScoresScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScoresScalarFieldEnum>;

    @Field(() => UserScoresScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserScoresScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserScoresCountAggregateInput, {nullable:true})
    _count?: UserScoresCountAggregateInput;

    @Field(() => UserScoresAvgAggregateInput, {nullable:true})
    _avg?: UserScoresAvgAggregateInput;

    @Field(() => UserScoresSumAggregateInput, {nullable:true})
    _sum?: UserScoresSumAggregateInput;

    @Field(() => UserScoresMinAggregateInput, {nullable:true})
    _min?: UserScoresMinAggregateInput;

    @Field(() => UserScoresMaxAggregateInput, {nullable:true})
    _max?: UserScoresMaxAggregateInput;
}
