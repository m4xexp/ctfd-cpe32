import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TeamMembersCreateManyInput } from './team-members-create-many.input';

@ArgsType()
export class CreateManyTeamMembersArgs {

    @Field(() => [TeamMembersCreateManyInput], {nullable:false})
    data!: Array<TeamMembersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
