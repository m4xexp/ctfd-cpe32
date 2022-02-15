import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsersSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_invite_id?: true;

    @Field(() => Boolean, {nullable:true})
    total_score?: true;
}
