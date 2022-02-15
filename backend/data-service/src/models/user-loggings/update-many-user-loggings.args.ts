import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsUpdateManyMutationInput } from './user-loggings-update-many-mutation.input';
import { UserLoggingsWhereInput } from './user-loggings-where.input';

@ArgsType()
export class UpdateManyUserLoggingsArgs {

    @Field(() => UserLoggingsUpdateManyMutationInput, {nullable:false})
    data!: UserLoggingsUpdateManyMutationInput;

    @Field(() => UserLoggingsWhereInput, {nullable:true})
    where?: UserLoggingsWhereInput;
}
