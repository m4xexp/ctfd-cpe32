import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserBadgesMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    badge_id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
