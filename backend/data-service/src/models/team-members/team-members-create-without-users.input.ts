import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamsCreateNestedOneWithoutTeamMembersInput } from '../teams/teams-create-nested-one-without-team-members.input';

@InputType()
export class TeamMembersCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TeamsCreateNestedOneWithoutTeamMembersInput, {nullable:false})
    teams!: TeamsCreateNestedOneWithoutTeamMembersInput;
}
