import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLoggingsScalarWhereInput } from './user-loggings-scalar-where.input';
import { UserLoggingsUpdateManyMutationInput } from './user-loggings-update-many-mutation.input';

@InputType()
export class UserLoggingsUpdateManyWithWhereWithoutUsersInput {

    @Field(() => UserLoggingsScalarWhereInput, {nullable:false})
    where!: UserLoggingsScalarWhereInput;

    @Field(() => UserLoggingsUpdateManyMutationInput, {nullable:false})
    data!: UserLoggingsUpdateManyMutationInput;
}
