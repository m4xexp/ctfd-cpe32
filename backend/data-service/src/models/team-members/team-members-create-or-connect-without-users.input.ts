import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';
import { TeamMembersCreateWithoutUsersInput } from './team-members-create-without-users.input';

@InputType()
export class TeamMembersCreateOrConnectWithoutUsersInput {

    @Field(() => TeamMembersWhereUniqueInput, {nullable:false})
    where!: TeamMembersWhereUniqueInput;

    @Field(() => TeamMembersCreateWithoutUsersInput, {nullable:false})
    create!: TeamMembersCreateWithoutUsersInput;
}
