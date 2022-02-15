import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutLevelsInput } from './challenges-create-without-levels.input';
import { ChallengesCreateOrConnectWithoutLevelsInput } from './challenges-create-or-connect-without-levels.input';
import { ChallengesCreateManyLevelsInputEnvelope } from './challenges-create-many-levels-input-envelope.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';

@InputType()
export class ChallengesUncheckedCreateNestedManyWithoutLevelsInput {

    @Field(() => [ChallengesCreateWithoutLevelsInput], {nullable:true})
    create?: Array<ChallengesCreateWithoutLevelsInput>;

    @Field(() => [ChallengesCreateOrConnectWithoutLevelsInput], {nullable:true})
    connectOrCreate?: Array<ChallengesCreateOrConnectWithoutLevelsInput>;

    @Field(() => ChallengesCreateManyLevelsInputEnvelope, {nullable:true})
    createMany?: ChallengesCreateManyLevelsInputEnvelope;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengesWhereUniqueInput>;
}
