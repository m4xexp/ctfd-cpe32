import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChallengesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    scorce?: true;

    @Field(() => Boolean, {nullable:true})
    max_time?: true;

    @Field(() => Boolean, {nullable:true})
    max_cost?: true;
}
