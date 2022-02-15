import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengesCreateInput } from './challenges-create.input';

@ArgsType()
export class CreateOneChallengesArgs {

    @Field(() => ChallengesCreateInput, {nullable:false})
    data!: ChallengesCreateInput;
}
