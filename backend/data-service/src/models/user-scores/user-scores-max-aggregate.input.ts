import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserScoresMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    challenge_id?: true;

    @Field(() => Boolean, {nullable:true})
    base_score?: true;

    @Field(() => Boolean, {nullable:true})
    time_score?: true;

    @Field(() => Boolean, {nullable:true})
    level_id?: true;

    @Field(() => Boolean, {nullable:true})
    types_id?: true;

    @Field(() => Boolean, {nullable:true})
    categories_id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
