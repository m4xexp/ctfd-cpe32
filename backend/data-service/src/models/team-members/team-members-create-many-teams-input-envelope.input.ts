import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersCreateManyTeamsInput } from './team-members-create-many-teams.input';

@InputType()
export class TeamMembersCreateManyTeamsInputEnvelope {

    @Field(() => [TeamMembersCreateManyTeamsInput], {nullable:false})
    data!: Array<TeamMembersCreateManyTeamsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
