import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateManyTypesInput } from './challenges-create-many-types.input';

@InputType()
export class ChallengesCreateManyTypesInputEnvelope {

    @Field(() => [ChallengesCreateManyTypesInput], {nullable:false})
    data!: Array<ChallengesCreateManyTypesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
