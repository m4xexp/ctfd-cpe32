import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';
import { TeamMembersUpdateWithoutTeamsInput } from './team-members-update-without-teams.input';
import { TeamMembersCreateWithoutTeamsInput } from './team-members-create-without-teams.input';

@InputType()
export class TeamMembersUpsertWithWhereUniqueWithoutTeamsInput {

    @Field(() => TeamMembersWhereUniqueInput, {nullable:false})
    where!: TeamMembersWhereUniqueInput;

    @Field(() => TeamMembersUpdateWithoutTeamsInput, {nullable:false})
    update!: TeamMembersUpdateWithoutTeamsInput;

    @Field(() => TeamMembersCreateWithoutTeamsInput, {nullable:false})
    create!: TeamMembersCreateWithoutTeamsInput;
}
