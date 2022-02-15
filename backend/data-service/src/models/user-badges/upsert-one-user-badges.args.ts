import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';
import { UserBadgesCreateInput } from './user-badges-create.input';
import { UserBadgesUpdateInput } from './user-badges-update.input';

@ArgsType()
export class UpsertOneUserBadgesArgs {

    @Field(() => UserBadgesWhereUniqueInput, {nullable:false})
    where!: UserBadgesWhereUniqueInput;

    @Field(() => UserBadgesCreateInput, {nullable:false})
    create!: UserBadgesCreateInput;

    @Field(() => UserBadgesUpdateInput, {nullable:false})
    update!: UserBadgesUpdateInput;
}
