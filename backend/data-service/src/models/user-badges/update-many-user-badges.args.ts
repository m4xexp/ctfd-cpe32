import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserBadgesUpdateManyMutationInput } from './user-badges-update-many-mutation.input';
import { UserBadgesWhereInput } from './user-badges-where.input';

@ArgsType()
export class UpdateManyUserBadgesArgs {

    @Field(() => UserBadgesUpdateManyMutationInput, {nullable:false})
    data!: UserBadgesUpdateManyMutationInput;

    @Field(() => UserBadgesWhereInput, {nullable:true})
    where?: UserBadgesWhereInput;
}
