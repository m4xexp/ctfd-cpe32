import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsCreateInput } from './user-loggings-create.input';

@ArgsType()
export class CreateOneUserLoggingsArgs {

    @Field(() => UserLoggingsCreateInput, {nullable:false})
    data!: UserLoggingsCreateInput;
}
