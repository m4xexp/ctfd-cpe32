import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateWithoutTypesInput } from './user-scores-create-without-types.input';
import { UserScoresCreateOrConnectWithoutTypesInput } from './user-scores-create-or-connect-without-types.input';
import { UserScoresUpsertWithWhereUniqueWithoutTypesInput } from './user-scores-upsert-with-where-unique-without-types.input';
import { UserScoresCreateManyTypesInputEnvelope } from './user-scores-create-many-types-input-envelope.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';
import { UserScoresUpdateWithWhereUniqueWithoutTypesInput } from './user-scores-update-with-where-unique-without-types.input';
import { UserScoresUpdateManyWithWhereWithoutTypesInput } from './user-scores-update-many-with-where-without-types.input';
import { UserScoresScalarWhereInput } from './user-scores-scalar-where.input';

@InputType()
export class UserScoresUncheckedUpdateManyWithoutTypesInput {

    @Field(() => [UserScoresCreateWithoutTypesInput], {nullable:true})
    create?: Array<UserScoresCreateWithoutTypesInput>;

    @Field(() => [UserScoresCreateOrConnectWithoutTypesInput], {nullable:true})
    connectOrCreate?: Array<UserScoresCreateOrConnectWithoutTypesInput>;

    @Field(() => [UserScoresUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    upsert?: Array<UserScoresUpsertWithWhereUniqueWithoutTypesInput>;

    @Field(() => UserScoresCreateManyTypesInputEnvelope, {nullable:true})
    createMany?: UserScoresCreateManyTypesInputEnvelope;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    set?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    delete?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    connect?: Array<UserScoresWhereUniqueInput>;

    @Field(() => [UserScoresUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    update?: Array<UserScoresUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [UserScoresUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    updateMany?: Array<UserScoresUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [UserScoresScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScoresScalarWhereInput>;
}
