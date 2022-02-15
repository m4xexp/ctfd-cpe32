import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutTypesInput } from './challenges-create-without-types.input';
import { ChallengesCreateOrConnectWithoutTypesInput } from './challenges-create-or-connect-without-types.input';
import { ChallengesCreateManyTypesInputEnvelope } from './challenges-create-many-types-input-envelope.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';

@InputType()
export class ChallengesUncheckedCreateNestedManyWithoutTypesInput {

    @Field(() => [ChallengesCreateWithoutTypesInput], {nullable:true})
    create?: Array<ChallengesCreateWithoutTypesInput>;

    @Field(() => [ChallengesCreateOrConnectWithoutTypesInput], {nullable:true})
    connectOrCreate?: Array<ChallengesCreateOrConnectWithoutTypesInput>;

    @Field(() => ChallengesCreateManyTypesInputEnvelope, {nullable:true})
    createMany?: ChallengesCreateManyTypesInputEnvelope;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengesWhereUniqueInput>;
}
