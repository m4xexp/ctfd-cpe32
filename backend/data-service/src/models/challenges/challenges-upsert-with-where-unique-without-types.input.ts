import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereUniqueInput } from './challenges-where-unique.input';
import { ChallengesUpdateWithoutTypesInput } from './challenges-update-without-types.input';
import { ChallengesCreateWithoutTypesInput } from './challenges-create-without-types.input';

@InputType()
export class ChallengesUpsertWithWhereUniqueWithoutTypesInput {

    @Field(() => ChallengesWhereUniqueInput, {nullable:false})
    where!: ChallengesWhereUniqueInput;

    @Field(() => ChallengesUpdateWithoutTypesInput, {nullable:false})
    update!: ChallengesUpdateWithoutTypesInput;

    @Field(() => ChallengesCreateWithoutTypesInput, {nullable:false})
    create!: ChallengesCreateWithoutTypesInput;
}
