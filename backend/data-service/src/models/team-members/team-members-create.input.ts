import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateNestedOneWithoutTeamMembersInput } from '../users/users-create-nested-one-without-team-members.input';
import { TeamsCreateNestedOneWithoutTeamMembersInput } from '../teams/teams-create-nested-one-without-team-members.input';

@InputType()
export class TeamMembersCreateInput {

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UsersCreateNestedOneWithoutTeamMembersInput, {nullable:false})
    users!: UsersCreateNestedOneWithoutTeamMembersInput;

    @Field(() => TeamsCreateNestedOneWithoutTeamMembersInput, {nullable:false})
    teams!: TeamsCreateNestedOneWithoutTeamMembersInput;
}
