import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagQuestionsCreateWithoutChallengesInput } from './flag-questions-create-without-challenges.input';
import { FlagQuestionsCreateOrConnectWithoutChallengesInput } from './flag-questions-create-or-connect-without-challenges.input';
import { FlagQuestionsCreateManyChallengesInputEnvelope } from './flag-questions-create-many-challenges-input-envelope.input';
import { FlagQuestionsWhereUniqueInput } from './flag-questions-where-unique.input';

@InputType()
export class FlagQuestionsCreateNestedManyWithoutChallengesInput {

    @Field(() => [FlagQuestionsCreateWithoutChallengesInput], {nullable:true})
    create?: Array<FlagQuestionsCreateWithoutChallengesInput>;

    @Field(() => [FlagQuestionsCreateOrConnectWithoutChallengesInput], {nullable:true})
    connectOrCreate?: Array<FlagQuestionsCreateOrConnectWithoutChallengesInput>;

    @Field(() => FlagQuestionsCreateManyChallengesInputEnvelope, {nullable:true})
    createMany?: FlagQuestionsCreateManyChallengesInputEnvelope;

    @Field(() => [FlagQuestionsWhereUniqueInput], {nullable:true})
    connect?: Array<FlagQuestionsWhereUniqueInput>;
}
