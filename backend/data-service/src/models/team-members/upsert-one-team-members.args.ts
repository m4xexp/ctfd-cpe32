import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';
import { TeamMembersCreateInput } from './team-members-create.input';
import { TeamMembersUpdateInput } from './team-members-update.input';

@ArgsType()
export class UpsertOneTeamMembersArgs {

    @Field(() => TeamMembersWhereUniqueInput, {nullable:false})
    where!: TeamMembersWhereUniqueInput;

    @Field(() => TeamMembersCreateInput, {nullable:false})
    create!: TeamMembersCreateInput;

    @Field(() => TeamMembersUpdateInput, {nullable:false})
    update!: TeamMembersUpdateInput;
}
