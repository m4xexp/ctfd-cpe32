import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';
import { TeamMembersUpdateWithoutUsersInput } from './team-members-update-without-users.input';
import { TeamMembersCreateWithoutUsersInput } from './team-members-create-without-users.input';

@InputType()
export class TeamMembersUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => TeamMembersWhereUniqueInput, {nullable:false})
    where!: TeamMembersWhereUniqueInput;

    @Field(() => TeamMembersUpdateWithoutUsersInput, {nullable:false})
    update!: TeamMembersUpdateWithoutUsersInput;

    @Field(() => TeamMembersCreateWithoutUsersInput, {nullable:false})
    create!: TeamMembersCreateWithoutUsersInput;
}
