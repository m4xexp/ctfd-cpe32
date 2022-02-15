import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesWhereInput } from './challenges-where.input';

@InputType()
export class ChallengesRelationFilter {

    @Field(() => ChallengesWhereInput, {nullable:true})
    is?: ChallengesWhereInput;

    @Field(() => ChallengesWhereInput, {nullable:true})
    isNot?: ChallengesWhereInput;
}
