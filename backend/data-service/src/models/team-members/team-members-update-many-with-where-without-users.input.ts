import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersScalarWhereInput } from './team-members-scalar-where.input';
import { TeamMembersUpdateManyMutationInput } from './team-members-update-many-mutation.input';

@InputType()
export class TeamMembersUpdateManyWithWhereWithoutUsersInput {

    @Field(() => TeamMembersScalarWhereInput, {nullable:false})
    where!: TeamMembersScalarWhereInput;

    @Field(() => TeamMembersUpdateManyMutationInput, {nullable:false})
    data!: TeamMembersUpdateManyMutationInput;
}
