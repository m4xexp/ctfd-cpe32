import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutTypesInput } from './challenges-create-without-types.input';
import { ChallengesCreateOrConnectWithoutTypesInput } from './challenges-create-or-connect-without-types.input';
import { ChallengesUpsertWithWhereUniqueWithoutTypesInput } from './challenges-upsert-with-where-unique-without-types.input';
import { ChallengesCreateManyTypesInputEnvelope } from './challenges-create-many-types-input-envelope.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithWhereUniqueWithoutTypesInput } from './challenges-update-with-where-unique-without-types.input';
import { ChallengesUpdateManyWithWhereWithoutTypesInput } from './challenges-update-many-with-where-without-types.input';
import { ChallengesScalarWhereInput } from './challenges-scalar-where.input';

@InputType()
export class ChallengesUncheckedUpdateManyWithoutTypesInput {

    @Field(() => [ChallengesCreateWithoutTypesInput], {nullable:true})
    create?: Array<ChallengesCreateWithoutTypesInput>;

    @Field(() => [ChallengesCreateOrConnectWithoutTypesInput], {nullable:true})
    connectOrCreate?: Array<ChallengesCreateOrConnectWithoutTypesInput>;

    @Field(() => [ChallengesUpsertWithWhereUniqueWithoutTypesInput], {nullable:true})
    upsert?: Array<ChallengesUpsertWithWhereUniqueWithoutTypesInput>;

    @Field(() => ChallengesCreateManyTypesInputEnvelope, {nullable:true})
    createMany?: ChallengesCreateManyTypesInputEnvelope;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    set?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    delete?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengesWhereUniqueInput>;

    @Field(() => [ChallengesUpdateWithWhereUniqueWithoutTypesInput], {nullable:true})
    update?: Array<ChallengesUpdateWithWhereUniqueWithoutTypesInput>;

    @Field(() => [ChallengesUpdateManyWithWhereWithoutTypesInput], {nullable:true})
    updateMany?: Array<ChallengesUpdateManyWithWhereWithoutTypesInput>;

    @Field(() => [ChallengesScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChallengesScalarWhereInput>;
}
