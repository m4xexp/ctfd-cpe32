import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';

@ArgsType()
export class DeleteOneTeamMembersArgs {

    @Field(() => TeamMembersWhereUniqueInput, {nullable:false})
    where!: TeamMembersWhereUniqueInput;
}
