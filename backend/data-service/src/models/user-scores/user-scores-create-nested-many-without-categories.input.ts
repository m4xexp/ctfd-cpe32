import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScoresCreateWithoutCategoriesInput } from './user-scores-create-without-categories.input';
import { UserScoresCreateOrConnectWithoutCategoriesInput } from './user-scores-create-or-connect-without-categories.input';
import { UserScoresCreateManyCategoriesInputEnvelope } from './user-scores-create-many-categories-input-envelope.input';
import { UserScoresWhereUniqueInput } from './user-scores-where-unique.input';

@InputType()
export class UserScoresCreateNestedManyWithoutCategoriesInput {

    @Field(() => [UserScoresCreateWithoutCategoriesInput], {nullable:true})
    create?: Array<UserScoresCreateWithoutCategoriesInput>;

    @Field(() => [UserScoresCreateOrConnectWithoutCategoriesInput], {nullable:true})
    connectOrCreate?: Array<UserScoresCreateOrConnectWithoutCategoriesInput>;

    @Field(() => UserScoresCreateManyCategoriesInputEnvelope, {nullable:true})
    createMany?: UserScoresCreateManyCategoriesInputEnvelope;

    @Field(() => [UserScoresWhereUniqueInput], {nullable:true})
    connect?: Array<UserScoresWhereUniqueInput>;
}
