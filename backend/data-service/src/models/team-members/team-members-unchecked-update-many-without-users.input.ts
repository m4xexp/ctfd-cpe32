import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TeamMembersCreateWithoutUsersInput } from './team-members-create-without-users.input';
import { TeamMembersCreateOrConnectWithoutUsersInput } from './team-members-create-or-connect-without-users.input';
import { TeamMembersUpsertWithWhereUniqueWithoutUsersInput } from './team-members-upsert-with-where-unique-without-users.input';
import { TeamMembersCreateManyUsersInputEnvelope } from './team-members-create-many-users-input-envelope.input';
import { TeamMembersWhereUniqueInput } from './team-members-where-unique.input';
import { TeamMembersUpdateWithWhereUniqueWithoutUsersInput } from './team-members-update-with-where-unique-without-users.input';
import { TeamMembersUpdateManyWithWhereWithoutUsersInput } from './team-members-update-many-with-where-without-users.input';
import { TeamMembersScalarWhereInput } from './team-members-scalar-where.input';

@InputType()
export class TeamMembersUncheckedUpdateManyWithoutUsersInput {

    @Field(() => [TeamMembersCreateWithoutUsersInput], {nullable:true})
    create?: Array<TeamMembersCreateWithoutUsersInput>;

    @Field(() => [TeamMembersCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<TeamMembersCreateOrConnectWithoutUsersInput>;

    @Field(() => [TeamMembersUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<TeamMembersUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => TeamMembersCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: TeamMembersCreateManyUsersInputEnvelope;

    @Field(() => [TeamMembersWhereUniqueInput], {nullable:true})
    set?: Array<TeamMembersWhereUniqueInput>;

    @Field(() => [TeamMembersWhereUniqueInput], {nullable:true})
    disconnect?: Array<TeamMembersWhereUniqueInput>;

    @Field(() => [TeamMembersWhereUniqueInput], {nullable:true})
    delete?: Array<TeamMembersWhereUniqueInput>;

    @Field(() => [TeamMembersWhereUniqueInput], {nullable:true})
    connect?: Array<TeamMembersWhereUniqueInput>;

    @Field(() => [TeamMembersUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<TeamMembersUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [TeamMembersUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<TeamMembersUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [TeamMembersScalarWhereInput], {nullable:true})
    deleteMany?: Array<TeamMembersScalarWhereInput>;
}
