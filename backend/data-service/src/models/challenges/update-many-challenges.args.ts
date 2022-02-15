import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengesUpdateManyMutationInput } from './challenges-update-many-mutation.input';
import { ChallengesWhereInput } from './challenges-where.input';

@ArgsType()
export class UpdateManyChallengesArgs {

    @Field(() => ChallengesUpdateManyMutationInput, {nullable:false})
    data!: ChallengesUpdateManyMutationInput;

    @Field(() => ChallengesWhereInput, {nullable:true})
    where?: ChallengesWhereInput;
}
