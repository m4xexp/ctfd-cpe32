import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserTutorialsWhereUniqueInput } from './user-tutorials-where-unique.input';
import { UserTutorialsUpdateWithoutUsersInput } from './user-tutorials-update-without-users.input';
import { UserTutorialsCreateWithoutUsersInput } from './user-tutorials-create-without-users.input';

@InputType()
export class UserTutorialsUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => UserTutorialsWhereUniqueInput, {nullable:false})
    where!: UserTutorialsWhereUniqueInput;

    @Field(() => UserTutorialsUpdateWithoutUsersInput, {nullable:false})
    update!: UserTutorialsUpdateWithoutUsersInput;

    @Field(() => UserTutorialsCreateWithoutUsersInput, {nullable:false})
    create!: UserTutorialsCreateWithoutUsersInput;
}
