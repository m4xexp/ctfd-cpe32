import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutBadgesInput } from './challenges-create-without-badges.input';
import { ChallengesCreateOrConnectWithoutBadgesInput } from './challenges-create-or-connect-without-badges.input';
import { ChallengesUpsertWithWhereUniqueWithoutBadgesInput } from './challenges-upsert-with-where-unique-without-badges.input';
import { ChallengesCreateManyBadgesInputEnvelope } from './challenges-create-many-badges-input-envelope.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithWhereUniqueWithoutBadgesInput } from './challenges-update-with-where-unique-without-badges.input';
import { ChallengesUpdateManyWithWhereWithoutBadgesInput } from './challenges-update-many-with-where-without-badges.input';
import { ChallengesScalarWhereInput } from './challenges-scalar-where.input';

@InputType()
export class ChallengesUncheckedUpdateManyWithoutBadgesInput {

    @Field(() => [ChallengesCreateWithoutBadgesInput], {nullable:true})
    create?: Array<ChallengesCreateWithoutBadgesInput>;

    @Field(() => [ChallengesCreateOrConnectWithoutBadgesInput], {nullable:true})
    connectOrCreate?: Array<ChallengesCreateOrConnectWithoutBadgesInput>;

    @Field(() => [ChallengesUpsertWithWhereUniqueWithoutBadgesInput], {nullable:true})
    upsert?: Array<ChallengesUpsertWithWhereUniqueWithoutBadgesInput>;

    @Field(() => ChallengesCreateManyBadgesInputEnvelope, {nullable:true})
    createMany?: ChallengesCreateManyBadgesInputEnvelope;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    set?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    delete?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesUpdateWithWhereUniqueWithoutBadgesInput], {nullable:true})
    update?: Array<ChallengesUpdateWithWhereUniqueWithoutBadgesInput>;

    @Field(() => [ChallengesUpdateManyWithWhereWithoutBadgesInput], {nullable:true})
    updateMany?: Array<ChallengesUpdateManyWithWhereWithoutBadgesInput>;

    @Field(() => [ChallengesScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChallengesScalarWhereInput>;
}
