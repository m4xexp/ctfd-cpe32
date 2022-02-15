import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamsCreateWithoutTeamMembersInput } from './teams-create-without-team-members.input';
import { TeamsCreateOrConnectWithoutTeamMembersInput } from './teams-create-or-connect-without-team-members.input';
import { TeamsUpsertWithoutTeamMembersInput } from './teams-upsert-without-team-members.input';
import { TeamsWhereUniqueInput } from './teams-where-unique.input';
import { TeamsUpdateWithoutTeamMembersInput } from './teams-update-without-team-members.input';

@InputType()
export class TeamsUpdateOneRequiredWithoutTeamMembersInput {

    @Field(() => TeamsCreateWithoutTeamMembersInput, {nullable:true})
    create?: TeamsCreateWithoutTeamMembersInput;

    @Field(() => TeamsCreateOrConnectWithoutTeamMembersInput, {nullable:true})
    connectOrCreate?: TeamsCreateOrConnectWithoutTeamMembersInput;

    @Field(() => TeamsUpsertWithoutTeamMembersInput, {nullable:true})
    upsert?: TeamsUpsertWithoutTeamMembersInput;

    @Field(() => TeamsWhereUniqueInput, {nullable:true})
    connect?: TeamsWhereUniqueInput;

    @Field(() => TeamsUpdateWithoutTeamMembersInput, {nullable:true})
    update?: TeamsUpdateWithoutTeamMembersInput;
}
