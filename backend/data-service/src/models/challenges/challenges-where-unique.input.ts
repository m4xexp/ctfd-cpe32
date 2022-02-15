import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ChallengesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    challenge_id?: string;
}
