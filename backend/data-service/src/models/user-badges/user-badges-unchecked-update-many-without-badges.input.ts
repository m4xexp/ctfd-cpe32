import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserBadgesCreateWithoutBadgesInput } from './user-badges-create-without-badges.input';
import { UserBadgesCreateOrConnectWithoutBadgesInput } from './user-badges-create-or-connect-without-badges.input';
import { UserBadgesUpsertWithWhereUniqueWithoutBadgesInput } from './user-badges-upsert-with-where-unique-without-badges.input';
import { UserBadgesCreateManyBadgesInputEnvelope } from './user-badges-create-many-badges-input-envelope.input';
import { UserBadgesWhereUniqueInput } from './user-badges-where-unique.input';
import { UserBadgesUpdateWithWhereUniqueWithoutBadgesInput } from './user-badges-update-with-where-unique-without-badges.input';
import { UserBadgesUpdateManyWithWhereWithoutBadgesInput } from './user-badges-update-many-with-where-without-badges.input';
import { UserBadgesScalarWhereInput } from './user-badges-scalar-where.input';

@InputType()
export class UserBadgesUncheckedUpdateManyWithoutBadgesInput {

    @Field(() => [UserBadgesCreateWithoutBadgesInput], {nullable:true})
    create?: Array<UserBadgesCreateWithoutBadgesInput>;

    @Field(() => [UserBadgesCreateOrConnectWithoutBadgesInput], {nullable:true})
    connectOrCreate?: Array<UserBadgesCreateOrConnectWithoutBadgesInput>;

    @Field(() => [UserBadgesUpsertWithWhereUniqueWithoutBadgesInput], {nullable:true})
    upsert?: Array<UserBadgesUpsertWithWhereUniqueWithoutBadgesInput>;

    @Field(() => UserBadgesCreateManyBadgesInputEnvelope, {nullable:true})
    createMany?: UserBadgesCreateManyBadgesInputEnvelope;

    @Field(() => [UserBadgesWhereUniqueInput], {nullable:true})
    set?: Array<UserBadgesWhereUniqueInput>;

    @Field(() => [UserBadgesWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserBadgesWhereUniqueInput>;

    @Field(() => [UserBadgesWhereUniqueInput], {nullable:true})
    delete?: Array<UserBadgesWhereUniqueInput>;

    @Field(() => [UserBadgesWhereUniqueInput], {nullable:true})
    connect?: Array<UserBadgesWhereUniqueInput>;

    @Field(() => [UserBadgesUpdateWithWhereUniqueWithoutBadgesInput], {nullable:true})
    update?: Array<UserBadgesUpdateWithWhereUniqueWithoutBadgesInput>;

    @Field(() => [UserBadgesUpdateManyWithWhereWithoutBadgesInput], {nullable:true})
    updateMany?: Array<UserBadgesUpdateManyWithWhereWithoutBadgesInput>;

    @Field(() => [UserBadgesScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserBadgesScalarWhereInput>;
}
