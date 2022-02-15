import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsCreateManyUsersInput } from './user-tutorials-create-many-users.input';

@InputType()
export class UserTutorialsCreateManyUsersInputEnvelope {

    @Field(() => [UserTutorialsCreateManyUsersInput], {nullable:false})
    data!: Array<UserTutorialsCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
