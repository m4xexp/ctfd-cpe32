import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutBadgesInput } from './challenges-create-without-badges.input';
import { ChallengesCreateOrConnectWithoutBadgesInput } from './challenges-create-or-connect-without-badges.input';
import { ChallengesCreateManyBadgesInputEnvelope } from './challenges-create-many-badges-input-envelope.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';

@InputType()
export class ChallengesUncheckedCreateNestedManyWithoutBadgesInput {

    @Field(() => [ChallengesCreateWithoutBadgesInput], {nullable:true})
    create?: Array<ChallengesCreateWithoutBadgesInput>;

    @Field(() => [ChallengesCreateOrConnectWithoutBadgesInput], {nullable:true})
    connectOrCreate?: Array<ChallengesCreateOrConnectWithoutBadgesInput>;

    @Field(() => ChallengesCreateManyBadgesInputEnvelope, {nullable:true})
    createMany?: ChallengesCreateManyBadgesInputEnvelope;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengesWhereUniqueInput>;
}
