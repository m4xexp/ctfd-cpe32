import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input';
import { UserLoggingsCreateInput } from './user-loggings-create.input';
import { UserLoggingsUpdateInput } from './user-loggings-update.input';

@ArgsType()
export class UpsertOneUserLoggingsArgs {

    @Field(() => UserLoggingsWhereUniqueInput, {nullable:false})
    where!: UserLoggingsWhereUniqueInput;

    @Field(() => UserLoggingsCreateInput, {nullable:false})
    create!: UserLoggingsCreateInput;

    @Field(() => UserLoggingsUpdateInput, {nullable:false})
    update!: UserLoggingsUpdateInput;
}
