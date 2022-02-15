import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersCreateWithoutTeamMembersInput } from './users-create-without-team-members.input';

@InputType()
export class UsersCreateOrConnectWithoutTeamMembersInput {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    where!: UsersWhereUniqueInput;

    @Field(() => UsersCreateWithoutTeamMembersInput, {nullable:false})
    create!: UsersCreateWithoutTeamMembersInput;
}
