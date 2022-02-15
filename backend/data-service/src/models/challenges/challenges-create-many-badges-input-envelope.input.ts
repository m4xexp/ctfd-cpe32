import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateManyBadgesInput } from './challenges-create-many-badges.input';

@InputType()
export class ChallengesCreateManyBadgesInputEnvelope {

    @Field(() => [ChallengesCreateManyBadgesInput], {nullable:false})
    data!: Array<ChallengesCreateManyBadgesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
