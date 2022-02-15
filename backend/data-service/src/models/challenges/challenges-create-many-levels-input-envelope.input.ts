import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateManyLevelsInput } from './challenges-create-many-levels.input';

@InputType()
export class ChallengesCreateManyLevelsInputEnvelope {

    @Field(() => [ChallengesCreateManyLevelsInput], {nullable:false})
    data!: Array<ChallengesCreateManyLevelsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
