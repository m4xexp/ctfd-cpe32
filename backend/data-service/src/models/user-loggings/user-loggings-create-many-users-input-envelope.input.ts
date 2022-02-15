import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserLoggingsCreateManyUsersInput } from './user-loggings-create-many-users.input';

@InputType()
export class UserLoggingsCreateManyUsersInputEnvelope {

    @Field(() => [UserLoggingsCreateManyUsersInput], {nullable:false})
    data!: Array<UserLoggingsCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
