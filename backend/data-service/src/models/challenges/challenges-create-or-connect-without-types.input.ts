import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesCreateWithoutTypesInput } from './challenges-create-without-types.input';

@InputType()
export class ChallengesCreateOrConnectWithoutTypesInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesCreateWithoutTypesInput, {nullable:false})
    create!: ChallengesCreateWithoutTypesInput;
}
