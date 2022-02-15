import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutUserTutorialsInput } from './users-create-without-user-tutorials.input';
import { UsersCreateOrConnectWithoutUserTutorialsInput } from './users-create-or-connect-without-user-tutorials.input';
import { UsersUpsertWithoutUserTutorialsInput } from './users-upsert-without-user-tutorials.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutUserTutorialsInput } from './users-update-without-user-tutorials.input';

@InputType()
export class UsersUpdateOneRequiredWithoutUserTutorialsInput {

    @Field(() => UsersCreateWithoutUserTutorialsInput, {nullable:true})
    create?: UsersCreateWithoutUserTutorialsInput;

    @Field(() => UsersCreateOrConnectWithoutUserTutorialsInput, {nullable:true})
    connectOrCreate?: UsersCreateOrConnectWithoutUserTutorialsInput;

    @Field(() => UsersUpsertWithoutUserTutorialsInput, {nullable:true})
    upsert?: UsersUpsertWithoutUserTutorialsInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    connect?: UsersWhereUniqueInput;

    @Field(() => UsersUpdateWithoutUserTutorialsInput, {nullable:true})
    update?: UsersUpdateWithoutUserTutorialsInput;
}
