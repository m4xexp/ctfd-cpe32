import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamMembersUpdateInput } from './team-members-update.input';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';

@ArgsType()
export class UpdateOneTeamMembersArgs {

    @Field(() => TeamMembersUpdateInput, {nullable:false})
    data!: TeamMembersUpdateInput;

    @Field(() => TeamMembersWhereUniqueInput, {nullable:false})
    where!: TeamMembersWhereUniqueInput;
}
