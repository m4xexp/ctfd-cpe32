import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateWithoutChallengesInput } from './user-scores-create-without-challenges.input';
import { UserScoresCreateOrConnectWithoutChallengesInput } from './user-scores-create-or-connect-without-challenges.input';
import { UserScoresUpsertWithWhereUniqueWithoutChallengesInput } from './user-scores-upsert-with-where-unique-without-challenges.input';
import { UserScoresCreateManyChallengesInputEnvelope } from './user-scores-create-many-challenges-input-envelope.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithWhereUniqueWithoutChallengesInput } from './user-scores-update-with-where-unique-without-challenges.input';
import { UserScoresUpdateManyWithWhereWithoutChallengesInput } from './user-scores-update-many-with-where-without-challenges.input';
import { UserScoresScalarWhereInput } from './user-scores-scalar-where.input';

@InputType()
export class UserScoresUncheckedUpdateManyWithoutChallengesInput {

    @Field(() => [UserScoresCreateWithoutChallengesInput], {nullable:true})
    create?: Array<UserScoresCreateWithoutChallengesInput>;

    @Field(() => [UserScoresCreateOrConnectWithoutChallengesInput], {nullable:true})
    connectOrCreate?: Array<UserScoresCreateOrConnectWithoutChallengesInput>;

    @Field(() => [UserScoresUpsertWithWhereUniqueWithoutChallengesInput], {nullable:true})
    upsert?: Array<UserScoresUpsertWithWhereUniqueWithoutChallengesInput>;

    @Field(() => UserScoresCreateManyChallengesInputEnvelope, {nullable:true})
    createMany?: UserScoresCreateManyChallengesInputEnvelope;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    set?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    delete?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    connect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresUpdateWithWhereUniqueWithoutChallengesInput], {nullable:true})
    update?: Array<UserScoresUpdateWithWhereUniqueWithoutChallengesInput>;

    @Field(() => [UserScoresUpdateManyWithWhereWithoutChallengesInput], {nullable:true})
    updateMany?: Array<UserScoresUpdateManyWithWhereWithoutChallengesInput>;

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScoresScalarWhereInput>;
}
