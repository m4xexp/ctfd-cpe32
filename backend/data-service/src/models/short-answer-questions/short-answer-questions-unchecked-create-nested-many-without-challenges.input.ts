import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortAnswerQuestionsCreateWithoutChallengesInput } from './short-answer-questions-create-without-challenges.input';
import { ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput } from './short-answer-questions-create-or-connect-without-challenges.input';
import { ShortAnswerQuestionsCreateManyChallengesInputEnvelope } from './short-answer-questions-create-many-challenges-input-envelope.input';
import { ShortAnswerQuestionsWhereUniqueInput } from './short-answer-questions-where-unique.input';

@InputType()
export class ShortAnswerQuestionsUncheckedCreateNestedManyWithoutChallengesInput {

    @Field(() => [ShortAnswerQuestionsCreateWithoutChallengesInput], {nullable:true})
    create?: Array<ShortAnswerQuestionsCreateWithoutChallengesInput>;

    @Field(() => [ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput], {nullable:true})
    connectOrCreate?: Array<ShortAnswerQuestionsCreateOrConnectWithoutChallengesInput>;

    @Field(() => ShortAnswerQuestionsCreateManyChallengesInputEnvelope, {nullable:true})
    createMany?: ShortAnswerQuestionsCreateManyChallengesInputEnvelope;

    @Field(() => [ShortAnswerQuestionsWhereUniqueInput], {nullable:true})
    connect?: Array<ShortAnswerQuestionsWhereUniqueInput>;
}
