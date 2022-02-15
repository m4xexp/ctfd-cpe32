import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsCreateManyInput } from './user-loggings-create-many.input';

@ArgsType()
export class CreateManyUserLoggingsArgs {

    @Field(() => [UserLoggingsCreateManyInput], {nullable:false})
    data!: Array<UserLoggingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
