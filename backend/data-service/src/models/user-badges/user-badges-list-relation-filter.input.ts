import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesWhereInput } from './user-badges-where.input';

@InputType()
export class UserBadgesListRelationFilter {

    @Field(() => UserBadgesWhereInput, {nullable:true})
    every?: UserBadgesWhereInput;

    @Field(() => UserBadgesWhereInput, {nullable:true})
    some?: UserBadgesWhereInput;

    @Field(() => UserBadgesWhereInput, {nullable:true})
    none?: UserBadgesWhereInput;
}
