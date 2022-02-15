import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersCreateManyUsersInput } from './team-members-create-many-users.input';

@InputType()
export class TeamMembersCreateManyUsersInputEnvelope {

    @Field(() => [TeamMembersCreateManyUsersInput], {nullable:false})
    data!: Array<TeamMembersCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
