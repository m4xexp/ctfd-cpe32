import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgesCreateWithoutChallengesInput } from './badges-create-without-challenges.input';
import { BadgesCreateOrConnectWithoutChallengesInput } from './badges-create-or-connect-without-challenges.input';
import { BadgesUpsertWithoutChallengesInput } from './badges-upsert-without-challenges.input';
import { BadgesWhereUniqueInput } from './badges-where-unique.input';
import { BadgesUpdateWithoutChallengesInput } from './badges-update-without-challenges.input';

@InputType()
export class BadgesUpdateOneRequiredWithoutChallengesInput {

    @Field(() => BadgesCreateWithoutChallengesInput, {nullable:true})
    create?: BadgesCreateWithoutChallengesInput;

    @Field(() => BadgesCreateOrConnectWithoutChallengesInput, {nullable:true})
    connectOrCreate?: BadgesCreateOrConnectWithoutChallengesInput;

    @Field(() => BadgesUpsertWithoutChallengesInput, {nullable:true})
    upsert?: BadgesUpsertWithoutChallengesInput;

    @Field(() => BadgesWhereUniqueInput, {nullable:true})
    connect?: BadgesWhereUniqueInput;

    @Field(() => BadgesUpdateWithoutChallengesInput, {nullable:true})
    update?: BadgesUpdateWithoutChallengesInput;
}
