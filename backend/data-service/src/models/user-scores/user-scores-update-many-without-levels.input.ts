import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateWithoutLevelsInput } from './user-scores-create-without-levels.input';
import { UserScoresCreateOrConnectWithoutLevelsInput } from './user-scores-create-or-connect-without-levels.input';
import { UserScoresUpsertWithWhereUniqueWithoutLevelsInput } from './user-scores-upsert-with-where-unique-without-levels.input';
import { UserScoresCreateManyLevelsInputEnvelope } from './user-scores-create-many-levels-input-envelope.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithWhereUniqueWithoutLevelsInput } from './user-scores-update-with-where-unique-without-levels.input';
import { UserScoresUpdateManyWithWhereWithoutLevelsInput } from './user-scores-update-many-with-where-without-levels.input';
import { UserScoresScalarWhereInput } from './user-scores-scalar-where.input';

@InputType()
export class UserScoresUpdateManyWithoutLevelsInput {

    @Field(() => [UserScoresCreateWithoutLevelsInput], {nullable:true})
    create?: Array<UserScoresCreateWithoutLevelsInput>;

    @Field(() => [UserScoresCreateOrConnectWithoutLevelsInput], {nullable:true})
    connectOrCreate?: Array<UserScoresCreateOrConnectWithoutLevelsInput>;

    @Field(() => [UserScoresUpsertWithWhereUniqueWithoutLevelsInput], {nullable:true})
    upsert?: Array<UserScoresUpsertWithWhereUniqueWithoutLevelsInput>;

    @Field(() => UserScoresCreateManyLevelsInputEnvelope, {nullable:true})
    createMany?: UserScoresCreateManyLevelsInputEnvelope;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    set?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    delete?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    connect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresUpdateWithWhereUniqueWithoutLevelsInput], {nullable:true})
    update?: Array<UserScoresUpdateWithWhereUniqueWithoutLevelsInput>;

    @Field(() => [UserScoresUpdateManyWithWhereWithoutLevelsInput], {nullable:true})
    updateMany?: Array<UserScoresUpdateManyWithWhereWithoutLevelsInput>;

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScoresScalarWhereInput>;
}
