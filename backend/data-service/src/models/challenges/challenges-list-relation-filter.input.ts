import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereInput } from './challenges-where.input';

@InputType()
export class ChallengesListRelationFilter {

    @Field(() => ChallengesWhereInput, {nullable:true})
    every?: ChallengesWhereInput;

    @Field(() => ChallengesWhereInput, {nullable:true})
    some?: ChallengesWhereInput;

    @Field(() => ChallengesWhereInput, {nullable:true})
    none?: ChallengesWhereInput;
}
