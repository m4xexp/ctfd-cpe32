import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesCreateWithoutBadgesInput } from './user-badges-create-without-badges.input';
import { UserBadgesCreateOrConnectWithoutBadgesInput } from './user-badges-create-or-connect-without-badges.input';
import { UserBadgesCreateManyBadgesInputEnvelope } from './user-badges-create-many-badges-input-envelope.input';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';

@InputType()
export class UserBadgesUncheckedCreateNestedManyWithoutBadgesInput {

    @Field(() => [UserBadgesCreateWithoutBadgesInput], {nullable:true})
    create?: Array<UserBadgesCreateWithoutBadgesInput>;

    @Field(() => [UserBadgesCreateOrConnectWithoutBadgesInput], {nullable:true})
    connectOrCreate?: Array<UserBadgesCreateOrConnectWithoutBadgesInput>;

    @Field(() => UserBadgesCreateManyBadgesInputEnvelope, {nullable:true})
    createMany?: UserBadgesCreateManyBadgesInputEnvelope;

    @Field(() => [UserBadgesWhereUniqueInput], {nullable:true})
    connect?: Array<UserBadgesWhereUniqueInput>;
}
