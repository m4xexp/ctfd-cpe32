import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresScalarWhereInput } from './user-scores-scalar-where.input';
import { UserScoresUpdateManyMutationInput } from './user-scores-update-many-mutation.input';

@InputType()
export class UserScoresUpdateManyWithWhereWithoutChallengesInput {

    @Field(() => UserScoresScalarWhereInput, {nullable:false})
    where!: UserScoresScalarWhereInput;

    @Field(() => UserScoresUpdateManyMutationInput, {nullable:false})
    data!: UserScoresUpdateManyMutationInput;
}
