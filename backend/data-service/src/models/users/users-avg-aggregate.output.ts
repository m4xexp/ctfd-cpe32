import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UsersAvgAggregate {

    @Field(() => Float, {nullable:true})
    user_invite_id?: number;

    @Field(() => Float, {nullable:true})
    total_score?: number;
}
