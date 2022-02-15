import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChallengesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    challenge_id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    question?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    level_id?: true;

    @Field(() => Boolean, {nullable:true})
    types_id?: true;

    @Field(() => Boolean, {nullable:true})
    categories_id?: true;

    @Field(() => Boolean, {nullable:true})
    award_badge?: true;

    @Field(() => Boolean, {nullable:true})
    scorce?: true;

    @Field(() => Boolean, {nullable:true})
    max_time?: true;

    @Field(() => Boolean, {nullable:true})
    max_cost?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
