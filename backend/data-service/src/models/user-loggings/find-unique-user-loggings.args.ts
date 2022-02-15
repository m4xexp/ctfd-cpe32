import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserLoggingsWhereUniqueInput } from './user-loggings-where-unique.input';

@ArgsType()
export class FindUniqueUserLoggingsArgs {

    @Field(() => UserLoggingsWhereUniqueInput, {nullable:false})
    where!: UserLoggingsWhereUniqueInput;
}
