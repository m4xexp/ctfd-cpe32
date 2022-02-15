import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MultipleQuestionsCreateWithoutChallengesInput } from './multiple-questions-create-without-challenges.input';
import { MultipleQuestionsCreateOrConnectWithoutChallengesInput } from './multiple-questions-create-or-connect-without-challenges.input';
import { MultipleQuestionsCreateManyChallengesInputEnvelope } from './multiple-questions-create-many-challenges-input-envelope.input';
import { MultipleQuestionsWhereUniqueInput } from './multiple-questions-where-unique.input';

@InputType()
export class MultipleQuestionsUncheckedCreateNestedManyWithoutChallengesInput {

    @Field(() => [MultipleQuestionsCreateWithoutChallengesInput], {nullable:true})
    create?: Array<MultipleQuestionsCreateWithoutChallengesInput>;

    @Field(() => [MultipleQuestionsCreateOrConnectWithoutChallengesInput], {nullable:true})
    connectOrCreate?: Array<MultipleQuestionsCreateOrConnectWithoutChallengesInput>;

    @Field(() => MultipleQuestionsCreateManyChallengesInputEnvelope, {nullable:true})
    createMany?: MultipleQuestionsCreateManyChallengesInputEnvelope;

    @Field(() => [MultipleQuestionsWhereUniqueInput], {nullable:true})
    connect?: Array<MultipleQuestionsWhereUniqueInput>;
}
