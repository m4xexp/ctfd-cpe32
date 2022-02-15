import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateWithoutUsersInput } from './user-scores-create-without-users.input';
import { UserScoresCreateOrConnectWithoutUsersInput } from './user-scores-create-or-connect-without-users.input';
import { UserScoresCreateManyUsersInputEnvelope } from './user-scores-create-many-users-input-envelope.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';

@InputType()
export class UserScoresCreateNestedManyWithoutUsersInput {

    @Field(() => [UserScoresCreateWithoutUsersInput], {nullable:true})
    create?: Array<UserScoresCreateWithoutUsersInput>;

    @Field(() => [UserScoresCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<UserScoresCreateOrConnectWithoutUsersInput>;

    @Field(() => UserScoresCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: UserScoresCreateManyUsersInputEnvelope;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    connect?: Array<UserScoresWhereUniqueInput>;
}
