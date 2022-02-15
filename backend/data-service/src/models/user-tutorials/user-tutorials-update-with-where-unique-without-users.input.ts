import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsUpdateWithoutUsersInput } from './user-tutorials-update-without-users.input';

@InputType()
export class UserTutorialsUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => UserTutorialsWhereUniqueInput, {nullable:false})
    where!: UserTutorialsWhereUniqueInput;

    @Field(() => UserTutorialsUpdateWithoutUsersInput, {nullable:false})
    data!: UserTutorialsUpdateWithoutUsersInput;
}
