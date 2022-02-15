import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateWithoutCategoriesInput } from './challenges-create-without-categories.input';
import { ChallengesCreateOrConnectWithoutCategoriesInput } from './challenges-create-or-connect-without-categories.input';
import { ChallengesCreateManyCategoriesInputEnvelope } from './challenges-create-many-categories-input-envelope.input';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';

@InputType()
export class ChallengesUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [ChallengesCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<ChallengesCreateWithoutCategoriesInput>;

    @Field(() => [ChallengesCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<ChallengesCreateOrConnectWithoutCategoriesInput>;

    @Field(() => ChallengesCreateManyCategoriesInputEnvelope, {nullable:true})
    createMany?: ChallengesCreateManyCategoriesInputEnvelope;

    @Field(() => [ChallengesWhereUniqueInput], {nullable:true})
    connect?: Array<ChallengesWhereUniqueInput>;
}
