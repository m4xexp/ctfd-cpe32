import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutTeamMembersInput } from './users-create-without-team-members.input';
import { UsersCreateOrConnectWithoutTeamMembersInput } from './users-create-or-connect-without-team-members.input';
import { UsersUpsertWithoutTeamMembersInput } from './users-upsert-without-team-members.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithoutTeamMembersInput } from './users-update-without-team-members.input';

@InputType()
export class UsersUpdateOneRequiredWithoutTeamMembersInput {

    @Field(() => UsersCreateWithoutTeamMembersInput, {nullable:true})
    create?: UsersCreateWithoutTeamMembersInput;

    @Field(() => UsersCreateOrConnectWithoutTeamMembersInput, {nullable:true})
    connectOrCreate?: UsersCreateOrConnectWithoutTeamMembersInput;

    @Field(() => UsersUpsertWithoutTeamMembersInput, {nullable:true})
    upsert?: UsersUpsertWithoutTeamMembersInput;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    connect?: UsersWhereUniqueInput;

    @Field(() => UsersUpdateWithoutTeamMembersInput, {nullable:true})
    update?: UsersUpdateWithoutTeamMembersInput;
}
