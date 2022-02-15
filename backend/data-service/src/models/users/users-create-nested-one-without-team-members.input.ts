import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutTeamMembersInput } from './users-create-without-team-members.input';
import { UsersCreateOrConnectWithoutTeamMembersInput } from './users-create-or-connect-without-team-members.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedOneWithoutTeamMembersInput {

    @Field(() => UsersCreateWithoutTeamMembersInput, {nullable:true})
    create?: UsersCreateWithoutTeamMembersInput;

    @Field(() => UsersCreateOrConnectWithoutTeamMembersInput, {nullable:true})
    connectOrCreate?: UsersCreateOrConnectWithoutTeamMembersInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    connect?: UsersWhereUniqueInput;
}
