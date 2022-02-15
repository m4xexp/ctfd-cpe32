import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChallengesCreateManyCategoriesInput } from './challenges-create-many-categories.input';

@InputType()
export class ChallengesCreateManyCategoriesInputEnvelope {

    @Field(() => [ChallengesCreateManyCategoriesInput], {nullable:false})
    data!: Array<ChallengesCreateManyCategoriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
