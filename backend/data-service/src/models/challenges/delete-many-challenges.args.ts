import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengesWhereInput } from './challenges-where.input';

@ArgsType()
export class DeleteManyChallengesArgs {

    @Field(() => ChallengesWhereInput, {nullable:true})
    where?: ChallengesWhereInput;
}
