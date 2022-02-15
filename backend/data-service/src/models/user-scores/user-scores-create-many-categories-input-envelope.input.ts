import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateManyCategoriesInput } from './user-scores-create-many-categories.input';

@InputType()
export class UserScoresCreateManyCategoriesInputEnvelope {

    @Field(() => [UserScoresCreateManyCategoriesInput], {nullable:false})
    data!: Array<UserScoresCreateManyCategoriesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
