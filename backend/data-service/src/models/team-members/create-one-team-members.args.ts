import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamMembersCreateInput } from './team-members-create.input';

@ArgsType()
export class CreateOneTeamMembersArgs {

    @Field(() => TeamMembersCreateInput, {nullable:false})
    data!: TeamMembersCreateInput;
}
