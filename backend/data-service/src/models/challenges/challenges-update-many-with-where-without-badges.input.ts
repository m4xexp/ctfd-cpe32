import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesScalarWhereInput } from './challenges-scalar-where.input';
import { ChallengesUpdateManyMutationInput } from './challenges-update-many-mutation.input';

@InputType()
export class ChallengesUpdateManyWithWhereWithoutBadgesInput {

    @Field(() => ChallengesScalarWhereInput, {nullable:false})
    where!: ChallengesScalarWhereInput;

    @Field(() => ChallengesUpdateManyMutationInput, {nullable:false})
    data!: ChallengesUpdateManyMutationInput;
}
